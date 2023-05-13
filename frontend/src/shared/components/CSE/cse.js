import { useState } from "react";
import "./cse.css";

function WeighingMachine() {
  const [balls, setBalls] = useState(["?", "?", "?", "?", "?", "?", "?", "?"]);
  const [message, setMessage] = useState("Place 3 balls on each side of the weighing machine and click weigh");

  function handleWeigh() {
    const leftBalls = balls.slice(0, 3);
    const rightBalls = balls.slice(3, 6);
    const remainingBalls = balls.slice(6);

    const result = weigh(leftBalls, rightBalls);

    if (result === 0) {
      setMessage("The odd ball is one of the remaining balls. Weigh any 2 of them.");
    } else if (result < 0) {
      setMessage("The odd ball is lighter. Weigh any 2 balls from the left side.");
      setBalls([leftBalls[0], leftBalls[1], remainingBalls[0], remainingBalls[1], "?", "?", "?", "?"]);
    } else {
      setMessage("The odd ball is heavier. Weigh any 2 balls from the left side.");
      setBalls([leftBalls[0], leftBalls[1], remainingBalls[2], remainingBalls[3], "?", "?", "?", "?"]);
    }
  }

  function weigh(leftBalls, rightBalls) {
    const leftWeight = leftBalls.reduce((sum, ball) => sum + getWeight(ball), 0);
    const rightWeight = rightBalls.reduce((sum, ball) => sum + getWeight(ball), 0);
    return leftWeight - rightWeight;
  }

  function getWeight(ball) {
    switch (ball) {
      case "light":
        return -1;
      case "heavy":
        return 1;
      default:
        return 0;
    }
  }

  return (
    <div className="weighing-machine">
      <div className="message">{message}</div>
      <div className="balls">
        {balls.map((ball, index) => (
          <button key={index} className={`ball ball-${ball}`} onClick={() => setBalls(updateBalls(balls, index))}>
            {ball}
          </button>
        ))}
      </div>
      <button className="weigh-button" onClick={handleWeigh}>Weigh</button>
    </div>
  );
}

function updateBalls(balls, index) {
  const newBalls = [...balls];
  if (newBalls[index] === "?") {
    newBalls[index] = "light";
  } else if (newBalls[index] === "light") {
    newBalls[index] = "heavy";
  } else {
    newBalls[index] = "?";
  }
  return newBalls;
}

export default WeighingMachine;

