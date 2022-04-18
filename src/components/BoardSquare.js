const BoardSquare = ({letter}) => {
  return (
    <div className="board_square">{letter.toUpperCase()}</div>
  );
}

export default BoardSquare;