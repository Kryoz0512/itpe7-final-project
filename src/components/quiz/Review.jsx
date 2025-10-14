import { Button } from "../ui/button";

export default function Review({ reviewIndex, randomQuiz, click1, click2 }) {
  return (
    <div className="flex gap-3 mb-4">
      <Button
        className="border-1 bg-transparent flex-1"
        onClick={click1}
        disabled={reviewIndex === 0}
        variant="outline"
      >
        Previous
      </Button>
      <Button
        onClick={click2}
        disabled={reviewIndex === randomQuiz.length - 1}
        className="bg-transparent text-white border-white border-1 hover:text-black hover:bg-white flex-1"
      >
        Next
      </Button>
    </div>
  );
}
