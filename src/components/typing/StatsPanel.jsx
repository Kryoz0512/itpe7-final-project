export default function StatsPanel({ timeLeft, wpm, accuracy }) {
  return (
    <div className="flex gap-8 mt-8 text-lg">
      <p>
        ⏳ Time: <span className="font-bold text-yellow-400">{timeLeft}s</span>
      </p>
      <p>
        ✅ WPM: <span className="font-bold text-green-400">{wpm}</span>
      </p>
      <p>
        🎯 Accuracy:{" "}
        <span className="font-bold text-blue-400">{accuracy}%</span>
      </p>
    </div>
  );
}
