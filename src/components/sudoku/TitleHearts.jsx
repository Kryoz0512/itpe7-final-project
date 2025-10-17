

export default function TitleHearts({ hearts }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-3xl font-bold">SUDOKU!</h1>
      <div className="text-xl">
        {hearts > 0 ? "❤️".repeat(hearts) : "Game Over"}
      </div>
    </div>
  );
}
