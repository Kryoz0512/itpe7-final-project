import { useState, useEffect } from "react";
import NumberPanel from "./NumberPanel";
import NewGameButton from "./NewGameButton";
import Board from "./Board";
import TitleHearts from "./TitleHearts";
import WinNotification from "./WinNotification";

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
        let removeCount = 40;
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

    return (
        <div className="flex flex-col items-center text-white p-6 space-y-4">
            <TitleHearts hearts={hearts} />

            <div className="flex items-center space-x-6">
            
                <Board game={game} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />

                <NumberPanel handleNumberClickFunction={handleNumberClick}/>
                
            </div>

            <WinNotification isWinVariable={isWin} />

            <NewGameButton 

                title={"New Game"}

                onClick={() => {
                const full = generateBoard();
                const game = makeGame(full);
                setBoard(full);
                setGame(game);
                setHearts(3);
                }} 
                
            />

        </div>
    );
}
