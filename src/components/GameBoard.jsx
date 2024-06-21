
export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSelectSquare(row, column) {
  //     setGameBoard((previousGameBoard) => {
  //       const updatedBoard = [
  //         ...previousGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[row][column] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();

  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
