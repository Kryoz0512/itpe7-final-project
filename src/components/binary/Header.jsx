export default function Header({goBack, mode, timeLeft}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Binary Game</h1>
        <button
          onClick={goBack}
          className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
        >
          ← Back
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Mode: <span className="font-medium">{mode}</span>
      </p>

      {!mode.startsWith("practice") && (
        <div className="mt-3 text-right text-sm text-gray-700">
          ⏱️ Time Left: <span className="font-semibold">{timeLeft}s</span>
        </div>
      )}
    </>
  );
}
