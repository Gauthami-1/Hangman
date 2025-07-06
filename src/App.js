import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show } from './helper/helpers';
// import Notification from './components/Notification';
import React, {useState, useEffect} from 'react';
const words = [
  'application',
  'programming',
  'interface',
  'wizard',
  'algorithm',
  'function',
  'variable',
  'component',
  'database',
  'iteration',
  'asynchronous',
  'framework',
  'compile',
  'syntax',
  'react',
  'backend',
  'frontend',
  'object',
  'class',
  'module'
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(()=>{
    const handleKeydown = event => {
      const {key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);

  },[correctLetters,wrongLetters, playable]); // the things in teh [] are the conditions it need to meet for this funtion

  function playAgain(){
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    setShowHint(false); // reset the hint!

  }

  return (
    <>
      <Header showHint={showHint} setShowHint={setShowHint} />
      <div className = "game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
