    import { useState, useEffect } from "react";

    export default function SudokuGame() {
    const board3x3 = Array.from(new Array(9), () => Array(9).fill(0));
    const [board, setBoard] = useState(board3x3);
    const [game, setGame] = useState(board3x3);
    const [selectedCell, setSelectedCell] = useState(null);
    const [hearts, setHearts] = useState(3);

    // shuffle the 3x3 box
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // validate if number is valid
    function isValid(board, row, column, num) {
        for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][column] === num) return false;
        }
        const boxRow = Math.floor(row / 3) * 3;
        const boxColumn = Math.floor(column / 3) * 3;
        for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[boxRow + r][boxColumn + c] === num) return false;
        }
        }
        return true;
    }

    // generate the board with validity
    function generateBoard() {
        const newBoard = Array.from(new Array(9), () => Array(9).fill(0));
        function fill(row, column) {
        if (row === 9) return true;
        const nextRow = column === 8 ? row + 1 : row;
        const nextColumn = (column + 1) % 9;
        const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let number of numbers) {
            if (isValid(newBoard, row, column, number)) {
            newBoard[row][column] = number;
            if (fill(nextRow, nextColumn)) return true;
            newBoard[row][column] = 0;
            }
        }
        return false;
        }
        fill(0, 0);
        return newBoard;
    }

    // remove some number cells from the board
    function makeGame(board) {
        const game = board.map((row) => [...row]);
        let removeCount = 45;
        while (removeCount > 0) {
        const r = Math.floor(Math.random() * 9);
        const c = Math.floor(Math.random() * 9);
        if (game[r][c] !== 0) {
            game[r][c] = 0;
            removeCount--;
        }
        }
        return game;
    }

    // make an initial game
    useEffect(() => {
        const full = generateBoard();
        const game = makeGame(full);
        setBoard(full);
        setGame(game);
    }, []);

    // guessing and removing hearts on incorrect answer
    function handleNumberClick(num) {
        if (!selectedCell || hearts <= 0) return;
        const { row, col } = selectedCell;

        if (board[row][col] === num) {
        const newgame = game.map((r) => [...r]);
        newgame[row][col] = num;
        setGame(newgame);
        } else {
        setHearts((hearts) => hearts - 1);
        }

        setSelectedCell(null);
    }

    const isWin = game.every((row, r) =>
        row.every((val, c) => val === board[r][c])
    );

    // number buttons
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    return (
        <div className="flex flex-col items-center text-white p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-2">SUDOKU!</h1>
        <div className="text-xl mb-2">
            {hearts > 0 ? "❤️".repeat(hearts) : "Game Over"}
        </div>

        <div className="flex items-center space-x-6">
        
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
                        onClick={() =>
                        !isPrefilled && setSelectedCell({ row: r, col: c })
                        }
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

            {/* Numbers Panel with Flex */}
            <div className="flex flex-col h-38 bg-black/20 p-2 rounded-lg border border-white">
            {[0, 1, 2].map((rowIdx) => (
                <div key={rowIdx} className="flex space-x-2 mb-2">
                {numbers.slice(rowIdx * 3, rowIdx * 3 + 3).map((num) => (
                    <button
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className="border-2 border-white rounded-lg px-3 py-1 text-xl hover:bg-white hover:text-black transition"
                    >
                    {num}
                    </button>
                ))}
                </div>
            ))}
            </div>
        </div>

        {isWin && (
            <div className="text-2xl mt-4 text-green-400">You Win!</div>
        )}

        <button
            onClick={() => {
            const full = generateBoard();
            const game = makeGame(full);
            setBoard(full);
            setGame(game);
            setHearts(3);
            }}
            className="mt-4 border-2 border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition"
        >
            New Game
        </button>
        </div>
    );
    }
