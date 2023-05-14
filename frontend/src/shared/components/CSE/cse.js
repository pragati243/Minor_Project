import React, { useState } from 'react';
import './cse.css';

function NumberGuessingGame() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [hint, setHint] = useState('');
  const [message, setMessage] = useState('');
  const [message_solution, setSolution] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    if (guess === '') {
      setMessage('Please enter a number');
    } else if (guess > randomNumber) {
      setMessage('Too high, try again');
      setAttempts(attempts + 1);
    } else if (guess < randomNumber) {
      setMessage('Too low, try again');
      setAttempts(attempts + 1);
    } else {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    }
  };

  const handleHint = () => {
    setHint(`Try starting from 50. Then short your solution space and then again try middle elements.`);
  };
  
  const handleSolution = () => {
    setSolution(
      <div className="number-guessing-game__solution">
        <p>The number was {randomNumber}. Binary search can be used to solve this problem in a maximum of log(100) = 7 attempts.</p>
        <p className="solution-link">Here is the link to the solution: <u><a href="https://www.geeksforgeeks.org/number-guessing-game/" target="_blank" rel="noopener noreferrer">Solution</a></u></p>
      </div>
    );
  };
  
  

  return (
    
    <div className="number-guessing-game">
      <br></br>
      <h1 className="number-guessing-game__title">Number Guessing Game</h1>
      <p className="number-guessing-game__instructions">Guess a number between 1 and 100:</p>
      <input className="number-guessing-game__input" type="number" value={guess} onChange={(e) => setGuess(e.target.value)} /><br></br>
      <button className="number-guessing-game__button" onClick={handleGuess}>Guess</button> 
      <p className="number-guessing-game__message">{message}</p><br></br>
      <button className="number-guessing-game__button" onClick={handleHint}>Hint</button>
      <p className="number-guessing-game__message">{hint}</p><br></br>
      <button className="number-guessing-game__button" onClick={handleSolution}>Solution</button>
      <p className="number-guessing-game__message">{message_solution}</p>
    </div>
  );
}

export default NumberGuessingGame;
