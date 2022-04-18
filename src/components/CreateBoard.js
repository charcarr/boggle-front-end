import { useState } from 'react';

const CreateBoard = ({ onChange, size }) => {
  const [boardString, setBoardString] = useState('');

  const handleChange = (e) => {
    const newBoard = e.target.value;
    setBoardString(newBoard);
    const boardArray = newBoard.split(' ').map(row => row.split(''));
    onChange(boardArray);
  }

  return (
    <div>
      <form>
        <input name='boardString' value={boardString} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default CreateBoard;