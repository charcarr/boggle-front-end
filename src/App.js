import React, {useEffect, useState} from 'react';
import './App.css';
import Board from './components/Board';
import CreateBoard from './components/CreateBoard';
import SolutionList from './components/SolutionList';
import boggle from './helpers/boggle';

const BOARD_DIMENSION = 4;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
// Array of all acceptable words including acronyms sorted alphabetically
let dictionary = null;


function App() {
  const [dictionaryLoaded, setDictionaryLoaded] = useState(false);
  const [boardValues, setBoardValues] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [showSolutions, setShowSolutions] = useState(false);

  const getNewBoard = () => {
    const newBoard = boggle.createRandomBoard(BOARD_DIMENSION, ALPHABET);
    setBoardValues(newBoard);
    setShowSolutions(false);
  }
  const solveBoggle = async () => {
    const wordArray = await boggle.solve(boardValues, dictionary);
    setValidWords(wordArray);
    setShowSolutions(true);
  }

  useEffect(() => {
    getNewBoard();
    import('./dictionary_en_US.json').then(data => {
      dictionary = data.words.filter(word => word.length >= 3 && word.length <= 16);
      setDictionaryLoaded(true);
    })
  }, []);


  return (
    <div className="app_container">
      <h1>Boggle</h1>
      <CreateBoard onChange={setBoardValues}/>
      <Board rows={boardValues}/>
      <div className="user_actions">
        <button onClick={getNewBoard}>NEW BOARD</button>
        <button onClick={solveBoggle} disabled={!dictionaryLoaded}>SOLVE</button>
        <button onClick={getNewBoard}>CREATE MODE</button>
      </div>
      { showSolutions ? <SolutionList words={validWords}/> : <></> }
    </div>
  );
}

export default App;
