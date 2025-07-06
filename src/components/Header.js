import React from 'react';

const hints = {
  application: "A software program you interact with!",
  programming: "Writing instructions for computers to follow!",
  interface: "A shared boundary between systems or components!",
  wizard: "A helpful step-by-step setup assistant!",
  algorithm: "A process or set of rules to solve a problem!",
  function: "A reusable block of code that performs a task!",
  variable: "A named space in memory to store data!",
  component: "A modular, reusable part of a UI in frameworks like React!",
  database: "Used to store and manage structured data!",
  iteration: "Repeating a process, often in a loop!",
  asynchronous: "Operations that occur independently of the main flow!",
  framework: "A platform for building applications with predefined tools!",
  compile: "To convert code into executable machine language!",
  syntax: "Rules that define the structure of a programming language!",
  react: "A JavaScript library for building UIs!",
  backend: "The server-side logic behind an application!",
  frontend: "The part of an app users interact with directly!",
  object: "An instance of a class containing data and methods!",
  class: "A blueprint for creating objects in OOP!",
  module: "A file or piece of code that can be imported or reused!"
};


const Header = ({showHint, setShowHint, selectedWord, wrongLetters}) => {

    const handleShowHint = () =>{
        if (showHint) {
            setShowHint(false);
        } else {
            setShowHint(true);
        }
    };

    return (
        <>
            <h1>HangMan</h1>
            <p>Find the hidden word - Enter a letter</p>
            <button className="hint-button" onClick={handleShowHint}>💡 Get a Hint!</button>
            {showHint && <p style={{color: 'white'}}>Try vowels first! Then think of words related to Coding</p>}
            {wrongLetters.length === 5 && <p style={{color: 'white'}}>Hint for your last chance: {hints[selectedWord]}</p>}

        </>
    );
};

export default Header