import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Results({
  score,
  randomQuiz,
  reviewIndex,
  q,
  userAnswer,
  isCorrect,
  children,
}) {
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
            <p
              className={
                isCorrect
                  ? "text-green-600 font-medium"
                  : "text-red-600 font-medium"
              }
            >
              Your answer:{" "}
              {userAnswer !== null ? q.options[userAnswer] : "Not answered"}{" "}
              {isCorrect ? "✓" : "✗"}
            </p>
            {!isCorrect && (
              <p className="text-green-600 font-medium">
                Correct answer: {q.options[q.correctAnswer]}
              </p>
            )}
          </div>
        </div>
      </div>

      {children}
    </Card>
  );
}
