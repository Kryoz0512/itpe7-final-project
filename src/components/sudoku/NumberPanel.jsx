

export default function NumberPanel({ handleNumberClickFunction }) {
    
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    return(
        <div className="flex flex-col h-38 bg-black/20 p-2 rounded-lg border border-white">
            {[0, 1, 2].map((rowIdx) => (
                <div key={rowIdx} className="flex space-x-2 mb-2">
                {numbers.slice(rowIdx * 3, rowIdx * 3 + 3).map((num) => (
                    <button
                    key={num}
                    onClick={() => handleNumberClickFunction(num)}
                    className="border-2 border-white rounded-lg px-3 py-1 text-xl hover:bg-white hover:text-black transition"
                    >
                    {num}
                    </button>
                ))}
                </div>
            ))}
        </div>
    )
}