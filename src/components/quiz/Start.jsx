import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Start({ randomQuiz, setQuizStarted }) {
  return (
    <Card className="w-full max-w-2xl p-8 text-center bg-white shadow">
      <h1 className="text-3xl font-bold mb-4 text-black">
        {"EASY-EST QUIZ"}
      </h1>
      <p className="mb-8 text-black">
        {`Start the Easy-est Quiz to answer ${randomQuiz.length} random questions!`}
      </p>
      <Button
        className="cursor-pointer border hover:bg-white hover:text-black"
        onClick={setQuizStarted}
        size="lg"
      >
        Start Easy-est Quiz
      </Button>
    </Card>
  );
}
