import BoardRow from "./BoardRow";
import BoardSquare from "./BoardSquare";

const Board = ({board, editMode, updateBoard}) => {
  return (
    <div className="board">
      {board.map((row, rowIdx) => {
        return <BoardRow key={rowIdx}>
          {row.map((letter, colIdx) =>{
            return <BoardSquare
              key={colIdx}
              letter={letter}
              coords={[rowIdx, colIdx]}
              editMode={editMode}
              updateBoard={updateBoard}
            />
          })}
        </BoardRow>
      })}
    </div>
   );
}

export default Board;