import React from 'react';

const Header = ({showHint, setShowHint}) => {

    const handleShowHint = () =>{
        setShowHint(true);
    };

    return (
        <>
            <h1>HangMan</h1>
            <p>Find the hidden word - Enter a letter</p>
            <button onClick={handleShowHint}>Click for a hint Hint!</button>
            {showHint && <p style={{color: 'gray'}}>Try vowels first! Then think of words related to Coding</p>}

        </>
    );
};

export default Header