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
    <Card className="w-500 max-w-2xl p-8 bg-linear-65 bg-white text-black shadow">
      <div>
        <p className="text-sm text-white font-bold bg-black inline px-4 py-1 rounded-2xl">
          Question {currentQuestion + 1} of {randomQuiz.length}
        </p>
        <h1 className="text-xl font-semibold">{question.question}</h1>
      </div>

      {children}

      <div className="flex gap-3">
        <Button
          className="flex-1 bg-black text-white  cursor-pointer hover:bg-white hover:text-black"
          onClick={onClick2}
          disabled={currentQuestion === 0}
          variant="outline"
        >
          Previous
        </Button>

        {currentQuestion === randomQuiz.length - 1 ? (
          <Button
            className="flex-1 border bg-black text-white cursor-pointer hover:bg-white hover:text-black"
              onClick={onClick3}
            disabled={selectedAnswers.some((a) => a === null)}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            className="flex-1 cursor-pointer bg-black text-white hover:bg-white hover:text-black border"
            onClick={onClick4}
          >
            Next
          </Button>
        )}
      </div>
    </Card>
  );
}
