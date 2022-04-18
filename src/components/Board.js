import BoardSquare from "./BoardSquare";

const Board = ({rows}) => {
  return (
    <div className="board">
      {
        rows.map((row,index) => {
          return (
            <div className="board_row" key={index} >
              {row.map((letter, index) => <BoardSquare key={index} letter={letter}/>)}
            </div>
          )
        })
      }
    </div>
   );
}

export default Board;