export default function ResultScreen({ finished, handleRestart }) {
  if (!finished) return null;

  return (
    <div className="mt-10 text-center">
      <p className="text-2xl mb-4 font-semibold">🏁 Time’s up!</p>
      <button
        onClick={handleRestart}
        className="px-6 py-2 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:border-white hover:text-black cursor-pointer transition">
        Restart
      </button>
    </div>
  );
}
