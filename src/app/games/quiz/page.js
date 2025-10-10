"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const quizData = [
  {
    id: 1,
    question: "How many holes are in a Polo?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3,
  },
  {
    id: 2,
    question: "Can a match box?",
    options: ["Yes", "No", "No, but a tin can", "Maybe if it's lucky"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What is the opposite of OK?",
    options: ["KO", "Cancel", "No", "Not OK"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Click the smallest.",
    options: ["THIS ONE", "this one", "THIS ONE.", "the smallest"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "What sound does a bell make?",
    options: ["Ding", "Dong", "Blip-Blop-Bloop", "F’TANG!"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "What follows December 2nd?",
    options: ["December 3rd", "Nose", "Santa", "Question 7"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What do you put in a toaster?",
    options: ["Bread", "Toast", "Eggs", "Fire"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Which word looks wrong but isn’t?",
    options: ["Wrong", "Right", "Wrongly", "Wong"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "What's the color of the sky?",
    options: ["Blue", "Depends on mood", "Sometimes green", "It's a trick question"],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "How do you make holy water?",
    options: ["Boil the hell out of it", "Pray over it", "Add salt", "Freeze it"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "What is the answer to life, the universe, and everything?",
    options: ["Love", "42", "Nothing", "Cheese"],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "Which of these is a food?",
    options: ["Pie", "Eye", "Tie", "Why"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Touch the squarest shape.",
    options: ["Circle", "Square", "Triangle", "None of them"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "Can you fly?",
    options: ["Yes", "No", "Only on Tuesdays", "With enough imagination"],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "Spell 'banana' backwards.",
    options: ["ananab", "banana", "ananana", "Can’t spell it backwards!"],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Which is heavier: a ton of feathers or a ton of bricks?",
    options: ["Feathers", "Bricks", "Same weight", "Depends on humidity"],
    correctAnswer: 2,
  },
  {
    id: 17,
    question: "Click the correct answer.",
    options: ["This one", "No, this one", "Wrong", "Maybe this one?"],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "What color is the invisible man’s hat?",
    options: ["Blue", "Invisible", "Black", "Who’s the invisible man?"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "How many letters are in the word 'alphabet'?",
    options: ["7", "8", "26", "None"],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "If you mix red and yellow, what do you get?",
    options: ["Orange", "A mess", "Ketchup and mustard", "Confusion"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "What is a silly question?",
    options: ["This one", "That one", "The next one", "All of them"],
    correctAnswer: 3,
  },
  {
    id: 22,
    question: "What comes after 24?",
    options: ["25", "Christmas", "25?", "Question 25"],
    correctAnswer: 1,
  },
  {
    id: 23,
    question: "Where does the general keep his armies?",
    options: ["In the barracks", "In his sleeves", "At home", "On the map"],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "How many times can you subtract 10 from 100?",
    options: ["10", "9", "Once", "Infinity"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "Is mayonnaise an instrument?",
    options: ["Yes", "No", "Only on weekends", "Ask Patrick"],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "How many sides does a circle have?",
    options: ["1", "2", "None", "Infinite"],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "What’s full of holes but still holds water?",
    options: ["A sponge", "A cloud", "A sieve", "Logic"],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "What’s heavier: one kilogram of iron or one kilogram of feathers?",
    options: ["Iron", "Feathers", "They weigh the same", "Depends on wind speed"],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "What’s 0 divided by 0?",
    options: ["0", "Undefined", "Blue screen", "The cookie monster cries"],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "Which month has 28 days?",
    options: ["February", "All of them", "None", "Only leap years"],
    correctAnswer: 1,
  },
  {
    id: 31,
    question: "If you throw a blue stone into the Red Sea, what happens?",
    options: ["It sinks", "It turns purple", "It floats", "It disappears"],
    correctAnswer: 0,
  },
  {
    id: 32,
    question: "What do you call a fly without wings?",
    options: ["A walk", "A bug", "Dead", "A ground bee"],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: "If a rooster lays an egg on a roof, which side does it roll down?",
    options: ["Left", "Right", "Neither, roosters don’t lay eggs", "Depends on wind"],
    correctAnswer: 2,
  },
  {
    id: 34,
    question: "What’s the square root of a banana?",
    options: ["Banana²", "Monkey", "Yellow", "It’s fruit, not math!"],
    correctAnswer: 3,
  },
  {
    id: 35,
    question: "Which hand do you stir soup with?",
    options: ["Left", "Right", "Spoon", "None"],
    correctAnswer: 2,
  },
  {
    id: 36,
    question: "How do you spell 'wrong'?",
    options: ["W-R-O-N-G", "W-R-O-N-G?", "W-R-O-O-N-G", "R-O-N-G"],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "What is the color of clear water?",
    options: ["Blue", "Transparent", "Invisible", "Wet"],
    correctAnswer: 1,
  },
  {
    id: 38,
    question: "What’s at the end of everything?",
    options: ["Nothing", "The letter G", "The universe", "Time"],
    correctAnswer: 1,
  },
  {
    id: 39,
    question: "Can you get milk from a coconut?",
    options: ["Yes", "No", "Only if it’s a cowconut", "Try harder"],
    correctAnswer: 2,
  },
  {
    id: 40,
    question: "What’s the fastest liquid on Earth?",
    options: ["Mercury", "Water", "Milk", "Sneeze"],
    correctAnswer: 0,
  },
  {
    id: 41,
    question: "Which key opens any door?",
    options: ["Skeleton key", "Monkey", "Donkey", "Tur-key"],
    correctAnswer: 1,
  },
  {
    id: 42,
    question: "What’s brown and sticky?",
    options: ["Mud", "Stick", "Chocolate", "Caramel"],
    correctAnswer: 1,
  },
  {
    id: 43,
    question: "If two’s company and three’s a crowd, what are four and five?",
    options: ["Nine", "Math", "Chaos", "An odd pair"],
    correctAnswer: 0,
  },
  {
    id: 44,
    question: "Can you cry underwater?",
    options: ["Yes", "No", "You can, but no one sees", "Fish can"],
    correctAnswer: 2,
  },
  {
    id: 45,
    question: "What gets wetter the more it dries?",
    options: ["Towel", "Rain", "Sun", "Ice"],
    correctAnswer: 0,
  },
  {
    id: 46,
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    options: ["M", "O", "E", "N"],
    correctAnswer: 0,
  },
  {
    id: 47,
    question: "What goes up but never comes down?",
    options: ["Age", "Balloon", "Smoke", "Hopes"],
    correctAnswer: 0,
  },
  {
    id: 48,
    question: "Can you spell 'invisible'?",
    options: ["Yes", "No", "It’s invisible", "Maybe"],
    correctAnswer: 0,
  },
  {
    id: 49,
    question: "What can travel around the world while staying in a corner?",
    options: ["Stamp", "Compass", "Map", "Shadow"],
    correctAnswer: 0,
  },
  {
    id: 50,
    question: "If you had one wish, what would you wish for?",
    options: ["More wishes", "No homework", "Infinite power", "The next question"],
    correctAnswer: 3,
  },
  {
    id: 51,
    question: "How many bananas can you eat on an empty stomach?",
    options: ["1", "All of them", "None", "Depends on hunger"],
    correctAnswer: 0,
  },
  {
    id: 52,
    question: "Why did the chicken cross the road?",
    options: ["To get to the other side", "Because it was bored", "To avoid KFC", "Trick question"],
    correctAnswer: 2,
  },
  {
    id: 53,
    question: "How many months have 30 days?",
    options: ["4", "6", "11", "All except one"],
    correctAnswer: 2,
  },
  {
    id: 54,
    question: "What comes down but never goes up?",
    options: ["Rain", "Ball", "Shadow", "Your GPA"],
    correctAnswer: 0,
  },
  {
    id: 55,
    question: "What starts with E, ends with E, but only contains one letter?",
    options: ["Envelope", "E", "Eye", "Eagle"],
    correctAnswer: 0,
  },
  {
    id: 56,
    question: "If an electric train goes north at 100mph, where does the smoke go?",
    options: ["North", "South", "Nowhere, it’s electric", "Up"],
    correctAnswer: 2,
  },
  {
    id: 57,
    question: "What has keys but can’t open locks?",
    options: ["Piano", "Keyboard", "Map", "Monkey"],
    correctAnswer: 0,
  },
  {
    id: 58,
    question: "Where can you find Friday before Thursday?",
    options: ["In a dictionary", "In dreams", "In a paradox", "Nowhere"],
    correctAnswer: 0,
  },
  {
    id: 59,
    question: "What’s orange and sounds like a parrot?",
    options: ["Carrot", "Pumpkin", "Traffic cone", "Banana"],
    correctAnswer: 0,
  },
  {
    id: 60,
    question: "What has one eye but can’t see?",
    options: ["Needle", "Cyclops", "Storm", "Potato"],
    correctAnswer: 0,
  },
  {
    id: 61,
    question: "How many seconds are there in a year?",
    options: ["12", "31536000", "Lots", "Depends on leap year"],
    correctAnswer: 0,
  },
  {
    id: 62,
    question: "What starts with P, ends with E, and has a million letters?",
    options: ["Post Office", "Pineapple", "Page", "People"],
    correctAnswer: 0,
  },
  {
    id: 63,
    question: "If you take 2 apples from 3 apples, how many do you have?",
    options: ["1", "2", "3", "None"],
    correctAnswer: 1,
  },
  {
    id: 64,
    question: "Which word is spelled incorrectly in every dictionary?",
    options: ["Incorrectly", "Wrong", "Dictionary", "Error"],
    correctAnswer: 0,
  },
  {
    id: 65,
    question: "If you have one, you want to share it. Once you share it, you don’t have it. What is it?",
    options: ["Secret", "Love", "Cookie", "Time"],
    correctAnswer: 0,
  },
  {
    id: 66,
    question: "What has hands but can’t clap?",
    options: ["Clock", "Zombie", "Chair", "Tree"],
    correctAnswer: 0,
  },
  {
    id: 67,
    question: "What can you catch but not throw?",
    options: ["Cold", "Ball", "Shadow", "Fish"],
    correctAnswer: 0,
  },
  {
    id: 68,
    question: "If you throw a red stone into the blue sea, what will it become?",
    options: ["Wet", "Purple", "Lost", "Heavy"],
    correctAnswer: 0,
  },
  {
    id: 69,
    question: "Why is 6 afraid of 7?",
    options: ["Because 7 8 9", "Math joke", "It’s not", "Because 9 was odd"],
    correctAnswer: 0,
  },
  {
    id: 70,
    question: "What runs around a backyard but never moves?",
    options: ["Fence", "Dog", "Shadow", "Wind"],
    correctAnswer: 0,
  },
  {
    id: 71,
    question: "What has a neck but no head?",
    options: ["Bottle", "Shirt", "Guitar", "Worm"],
    correctAnswer: 0,
  },
  {
    id: 72,
    question: "What can you break without touching it?",
    options: ["Promise", "Glass", "Heart", "Egg"],
    correctAnswer: 0,
  },
  {
    id: 73,
    question: "What belongs to you but is used more by others?",
    options: ["Your name", "Your phone", "Your time", "Your shoes"],
    correctAnswer: 0,
  },
  {
    id: 74,
    question: "What’s always coming but never arrives?",
    options: ["Tomorrow", "The bus", "Hope", "Payday"],
    correctAnswer: 0,
  },
  {
    id: 75,
    question: "What can fill a room but takes up no space?",
    options: ["Light", "Air", "Sound", "Love"],
    correctAnswer: 0,
  },
  {
    id: 76,
    question: "What goes up and down but doesn’t move?",
    options: ["Stairs", "Temperature", "See-saw", "Balloon"],
    correctAnswer: 0,
  },
  {
    id: 77,
    question: "What invention lets you see through walls?",
    options: ["Window", "X-ray", "Mirror", "Hole"],
    correctAnswer: 0,
  },
  {
    id: 78,
    question: "What has four wheels and flies?",
    options: ["Garbage truck", "Plane", "Batmobile", "Bee car"],
    correctAnswer: 0,
  },
  {
    id: 79,
    question: "What’s black and white and read all over?",
    options: ["Newspaper", "Zebra", "Penguin", "Old book"],
    correctAnswer: 0,
  },
  {
    id: 80,
    question: "What comes once in a year, twice in a week, but never in a day?",
    options: ["E", "A holiday", "Sleep", "Time"],
    correctAnswer: 0,
  },
  {
    id: 81,
    question: "What can’t talk but will reply when spoken to?",
    options: ["Echo", "Parrot", "Robot", "Wall"],
    correctAnswer: 0,
  },
  {
    id: 82,
    question: "What gets sharper the more you use it?",
    options: ["Brain", "Knife", "Tongue", "Pencil"],
    correctAnswer: 0,
  },
  {
    id: 83,
    question: "If you have 3 apples and take away 2, how many do you have?",
    options: ["1", "2", "3", "None"],
    correctAnswer: 1,
  },
  {
    id: 84,
    question: "What’s something you can serve but never eat?",
    options: ["Tennis ball", "Soup", "Wi-Fi", "Justice"],
    correctAnswer: 0,
  },
  {
    id: 85,
    question: "What gets bigger the more you take away?",
    options: ["Hole", "Debt", "Shadow", "Ego"],
    correctAnswer: 0,
  },
  {
    id: 86,
    question: "What’s easy to get into but hard to get out of?",
    options: ["Trouble", "Bed", "Car", "Conversation"],
    correctAnswer: 0,
  },
  {
    id: 87,
    question: "What kind of band never plays music?",
    options: ["Rubber band", "Boy band", "Armband", "Bandwidth"],
    correctAnswer: 0,
  },
  {
    id: 88,
    question: "What has ears but cannot hear?",
    options: ["Cornfield", "Statue", "Pillow", "Chair"],
    correctAnswer: 0,
  },
  {
    id: 89,
    question: "What has teeth but cannot bite?",
    options: ["Comb", "Saw", "Zipper", "All of them"],
    correctAnswer: 3,
  },
  {
    id: 90,
    question: "What can you hold without touching it?",
    options: ["Breath", "Thought", "Laugh", "Conversation"],
    correctAnswer: 0,
  },
  {
    id: 91,
    question: "What gets broken if you name it?",
    options: ["Silence", "Promise", "Glass", "Secret"],
    correctAnswer: 0,
  },
  {
    id: 92,
    question: "What can’t be used until it’s broken?",
    options: ["Egg", "Seal", "Heart", "Promise"],
    correctAnswer: 0,
  },
  {
    id: 93,
    question: "What kind of room has no doors or windows?",
    options: ["Mushroom", "Dark room", "Zoom room", "Tomb"],
    correctAnswer: 0,
  },
  {
    id: 94,
    question: "What has words but never speaks?",
    options: ["Book", "Letter", "Sign", "Dictionary"],
    correctAnswer: 0,
  },
  {
    id: 95,
    question: "What has many rings but no fingers?",
    options: ["Tree", "Phone", "Alarm", "Bell"],
    correctAnswer: 0,
  },
  {
    id: 96,
    question: "What gets cleaner the dirtier it gets?",
    options: ["Towel", "Soap", "Mop", "Laundry"],
    correctAnswer: 1,
  },
  {
    id: 97,
    question: "What type of coat is always wet when you put it on?",
    options: ["Paint", "Raincoat", "Mist", "Glue"],
    correctAnswer: 0,
  },
  {
    id: 98,
    question: "What comes once in a second, twice in a decade, but never in a century?",
    options: ["E", "C", "D", "N"],
    correctAnswer: 3,
  },
  {
    id: 99,
    question: "What goes through towns and over hills but never moves?",
    options: ["Road", "Wind", "Shadow", "Sound"],
    correctAnswer: 0,
  },
  {
    id: 100,
    question: "End of quiz! What’s your reward?",
    options: ["A cookie", "Nothing", "Bragging rights", "All of the above"],
    correctAnswer: 3,
  },
];

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
        <Card className="w-full max-w-2xl p-8 text-center bg-linear-65 from-purple-800 to-pink-800">
          <h1 className="text-3xl font-semibold mb-4 text-white">{"EASY-EST QUIZ"}</h1>
          <p className="mb-8 text-white">
            {`Start the Easy-est Quiz to answer ${randomQuiz.length} random questions!`}
          </p>
          <Button className="bg-transparent border-1 hover:bg-white hover:text-black" onClick={() => setQuizStarted(true)} size="lg">
            Start Easy-est Quiz
          </Button>
        </Card>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const q = randomQuiz[reviewIndex]
    const userAnswer = selectedAnswers[reviewIndex]
    const isCorrect = userAnswer === q.correctAnswer

    return (
        <Card className="w-500 max-w-2xl p-8 bg-linear-65 from-purple-800 to-pink-800 text-white">
          <h1 className="text-2xl font-semibold mb-6">The Results Are In!</h1>

          <div className="mb-8">
            <p className="text-lg mb-2">
              Score: {score} / {randomQuiz.length}
            </p>
            <p className="text-white">
              {score === randomQuiz.length
                ? "Perfect score!"
                : score >= randomQuiz.length / 2
                ? "Good job!"
                : "Keep practicing!"}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text mb-4">
              Review {reviewIndex + 1} of {randomQuiz.length}
            </p>

            <div className="border rounded-lg p-6">
              <p className="font-medium mb-4">
                {reviewIndex + 1}. {q.question}
              </p>
              <div className="space-y-2 text-sm">
                <p className={isCorrect ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  Your answer: {userAnswer !== null ? q.options[userAnswer] : "Not answered"} {isCorrect ? "✓" : "✗"}
                </p>
                {!isCorrect && (
                  <p className="text-green-600 font-medium">Correct answer: {q.options[q.correctAnswer]}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <Button className="border-1 bg-transparent flex-1" onClick={() => setReviewIndex(reviewIndex - 1)} disabled={reviewIndex === 0} variant="outline">
              Previous
            </Button>
            <Button
              onClick={() => setReviewIndex(reviewIndex + 1)}
              disabled={reviewIndex === randomQuiz.length - 1}
              className="bg-transparent text-white border-white border-1 hover:text-black hover:bg-white flex-1"
            >
              Next
            </Button>
          </div>

          <Button onClick={handleRestart} variant="outline" className="w-full bg-transparent">
            Start a new Quiz!
          </Button>
        </Card>
    )
  }

  const question = randomQuiz[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]

  return (
      <Card className="w-500 max-w-2xl p-8 bg-linear-65 from-purple-800 to-pink-800 text-white">
        <div>
          <p className="text-sm text-black font-bold bg-white inline px-4 py-1 rounded-2xl">
            Question {currentQuestion + 1} of {randomQuiz.length}
          </p>
          <h1 className="text-xl font-semibold">{question.question}</h1>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedAnswer === index ? 'bg-white text-black font-bold' : "border-border hover:border-primary/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button className="border-1 bg-transparent flex-1" onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
            Previous
          </Button>

          {currentQuestion === randomQuiz.length - 1 ? (
            <Button className="border-1 bg-transparent hover:bg-white hover:text-black flex-1" onClick={handleSubmit} disabled={selectedAnswers.some((a) => a === null)}>
              Submit Quiz
            </Button>
          ) : (
            <Button className="border-1 bg-transparent hover:bg-white hover:text-black flex-1" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </Card>
  )
}
