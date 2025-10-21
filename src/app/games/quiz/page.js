"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { quizData } from "../../../../db/quizData"
import Start from "@/components/quiz/Start"
import Results from "@/components/quiz/Results"
import Quiz from "@/components/quiz/Quiz"
import Review from "@/components/quiz/Review"

function restartQuiz() {
  return quizData.sort(() => Math.random() - 0.5).slice(0, 5);;
}


export default function QuizReviewer() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [randomQuiz, setRandomQuiz] = useState(restartQuiz())
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(randomQuiz.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < randomQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
    setReviewIndex(0)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setRandomQuiz(restartQuiz);
    setSelectedAnswers(new Array(randomQuiz.length).fill(null))
    setShowResults(false)
    setQuizStarted(true)
  }

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === randomQuiz[index].correctAnswer).length
  }

  if (!quizStarted) {
    return (
      <Start randomQuiz={randomQuiz} setQuizStarted={() => setQuizStarted(true)} />
    )
  }

  if (showResults) {
    const score = calculateScore()
    const q = randomQuiz[reviewIndex]
    const userAnswer = selectedAnswers[reviewIndex]
    const isCorrect = userAnswer === q.correctAnswer

    return (
      <Results score={score} randomQuiz={randomQuiz} reviewIndex={reviewIndex} q={q} userAnswer={userAnswer} isCorrect={isCorrect}>
        <Review reviewIndex={reviewIndex} randomQuiz={randomQuiz} click1={() => setReviewIndex(reviewIndex - 1)} click2={() => setReviewIndex(reviewIndex + 1)} />

        <Button
          onClick={handleRestart}
          variant="outline"
          className="w-full bg-black text-white hover:bg-white hover:text-black"
        >
          Start a new Quiz!
        </Button>
      </Results>
    )
  }

  const question = randomQuiz[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]

  return (
    <Quiz currentQuestion={currentQuestion} randomQuiz={randomQuiz} question={question} selectedAnswers={selectedAnswers} onClick1={() => handleAnswerSelect(index)} onClick2={handlePrevious} onClick3={handleSubmit} onClick4={handleNext}><div className="space-y-3 mb-8">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerSelect(index)}
          className={`w-full cursor-pointer text-left p-4 rounded-lg border transition-colors ${selectedAnswer === index
            ? "bg-black text-white font-bold"
            : "border-border hover:border-primary/50"
            }`}
        >
          {option}
        </button>
      ))}
    </div></Quiz>
  )
}
