import React, { useEffect, useState, useRef } from 'react';
import Board from './components/Board';
import SolutionList from './components/SolutionList';
import './App.css';
import boggle from './helpers/boggle';

const BOARD_DIMENSION = 4;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';


function App() {
  const [boardValues, setBoardValues] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [showSolutions, setShowSolutions] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const solutionsRef = useRef(null)

  const scrollToSolutions = () => solutionsRef.current.scrollIntoView()

  const getNewBoard = () => {
    const newBoard = boggle.createRandomBoard(BOARD_DIMENSION, ALPHABET);
    setBoardValues(newBoard);
    setShowSolutions(false);
    setEditMode(false);
  }
  const updateBoard = (val, row, col) => {
    setBoardValues(oldBoard => {
      const newBoard = [...oldBoard];
      newBoard[row] = [...oldBoard[row]];
      newBoard[row][col] = val.toLowerCase();
      return newBoard;
    })
  }
  const solveBoggle = async () => {
    const wordArray = await boggle.solve(boardValues);
    setValidWords(wordArray);
    setShowSolutions(true);
    scrollToSolutions();
  }
  const activateEditMode = () => {
    const emptyBoard = Array(BOARD_DIMENSION).fill(Array(BOARD_DIMENSION).fill(''));
    setBoardValues(emptyBoard);
    setEditMode(true);
    setShowSolutions(false);
  }

  useEffect(() => {
    getNewBoard();
  }, []);


  return (
    <div className="app_container">
      <h1>Boggle</h1>
      <Board board={boardValues} editMode={editMode} updateBoard={updateBoard} />
      <div className="user_actions">
        <button onClick={getNewBoard}>NEW BOARD</button>
        <button onClick={solveBoggle}>SOLVE</button>
        <button onClick={activateEditMode}>CREATE MODE</button>
      </div>
      { showSolutions && <SolutionList scrollRef={solutionsRef} words={validWords}/>}
    </div>
  );
}

export default App;
