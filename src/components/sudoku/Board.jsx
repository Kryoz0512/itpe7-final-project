export default function Board({ game, selectedCell, setSelectedCell }) {
  return (
    <div className="flex flex-col items-center bg-black/20 p-2 border-2 border-white rounded-lg">
      {game.map((row, r) => (
        <div key={r} className="flex">
          {row.map((cell, c) => {
            const isSelected =
              selectedCell && selectedCell.row === r && selectedCell.col === c;
            const isPrefilled = cell !== 0;
            return (
              <div
                key={c}
                onClick={() => !isPrefilled && setSelectedCell({ row: r, col: c })}
                className={`h-10 w-10 flex justify-center items-center border text-lg font-bold cursor-pointer transition-all
                  ${isPrefilled ? "text-white" : "text-white"}
                  ${isSelected ? "bg-[#aa01ff]" : "bg-black/20"}
                  border-white`}
              >
                {cell !== 0 ? cell : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
