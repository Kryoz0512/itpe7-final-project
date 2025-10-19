import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Start({ randomQuiz, setQuizStarted }) {
  return (
    <Card className="w-full max-w-2xl p-8 text-center bg-linear-65 bg-slate-900">
      <h1 className="text-3xl font-semibold mb-4 text-white">
        {"EASY-EST QUIZ"}
      </h1>
      <p className="mb-8 text-white">
        {`Start the Easy-est Quiz to answer ${randomQuiz.length} random questions!`}
      </p>
      <Button
        className="bg-transparent border-1 cursor-pointer hover:bg-white hover:text-black"
        onClick={setQuizStarted}
        size="lg"
      >
        Start Easy-est Quiz
      </Button>
    </Card>
  );
}
