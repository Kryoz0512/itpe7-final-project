import ButtonMode from "./ButtonMode";

export default function GameMode({ bitLength, mode }) {
  const gameModes = [
    {
      length: 4,
      type: "practice4",
      title: "4-bit Practice",
    },
    {
      length: 8,
      type: "practice8",
      title: "8-bit Practice",
    },
    {
      length: 4,
      type: "timed4_15",
      title: "4-bit Timed (Medium)",
    },
    {
      length: 4,
      type: "timed4_10",
      title: "4-bit Timed (Hard)",
    },
    {
      length: 8,
      type: "timed8_15",
      title: "8-bit Timed (Medium)",
    },
    {
      length: 8,
      type: "timed8_10",
      title: "8-bit Timed (Hard)",
    },
  ];
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg bg-white p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Choose Game Mode</h1>
      {gameModes.map(gameMode => (
        <ButtonMode
        bitLength={bitLength}
        length={gameMode.length}
        mode={mode}
        modeType={gameMode.type}
        modeTitle={gameMode.title}
        />
      ))}
    </div>
  );
}
