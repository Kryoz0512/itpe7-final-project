export default function ResultScreen({ finished, handleRestart }) {
  if (!finished) return null;

  return (
    <div className="mt-10 text-center">
      <p className="text-2xl mb-4 font-semibold">🏁 Time’s up!</p>
    </div>
  );
}
