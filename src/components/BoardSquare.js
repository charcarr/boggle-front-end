import { useState, useEffect } from 'react';

const BoardSquare = ({letter, editMode, updateBoard, coords}) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(letter)
  }, [letter]);

  const handleChange = (e) => {
    const newLetter = e.target.value;
    setInput(newLetter);
    updateBoard(newLetter, coords[0], coords[1])
  }

  return (
  <div className="board_square">
    { editMode
        ? <input
            placeholder="_"
            maxLength="1"
            type="text"
            style={{textTransform: "uppercase"}}
            value={input}
            onChange={handleChange}
          />
        : <p>{letter.toUpperCase()}</p>
    }
  </div>

  );
}

export default BoardSquare;