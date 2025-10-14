import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Quiz({
  currentQuestion,
  randomQuiz,
  question,
  selectedAnswers,
  onClick2,
  onClick3,
  onClick4,
  children
}) {
  return (
    <Card className="w-500 max-w-2xl p-8 bg-linear-65 from-purple-800 to-pink-800 text-white">
      <div>
        <p className="text-sm text-black font-bold bg-white inline px-4 py-1 rounded-2xl">
          Question {currentQuestion + 1} of {randomQuiz.length}
        </p>
        <h1 className="text-xl font-semibold">{question.question}</h1>
      </div>

      {children}

      <div className="flex gap-3">
        <Button
          className="border-1 bg-transparent flex-1"
          onClick={onClick2}
          disabled={currentQuestion === 0}
          variant="outline"
        >
          Previous
        </Button>

        {currentQuestion === randomQuiz.length - 1 ? (
          <Button
            className="border-1 bg-transparent hover:bg-white hover:text-black flex-1"
            onClick={onClick3}
            disabled={selectedAnswers.some((a) => a === null)}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            className="border-1 bg-transparent hover:bg-white hover:text-black flex-1"
            onClick={onClick4}
          >
            Next
          </Button>
        )}
      </div>
    </Card>
  );
}
