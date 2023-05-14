import React, { useState, useEffect } from 'react';
import './dsai.css';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [emptyCellIndexes, setEmptyCellIndexes] = useState([]);

  useEffect(() => {
    
    const numRows = 5; 
    const numCols = 4;

    const data = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => Math.floor(Math.random() * 100))
    );

    // Randomly selection of table 
    const emptyCellIndexes = Array.from({ length: numCols }, (_, colIndex) => {
      const rowIndex = Math.floor(Math.random() * numRows);
      data[rowIndex][colIndex] = '';
      return { rowIndex, colIndex };
    });

    setTableData(data);
    setEmptyCellIndexes(emptyCellIndexes);
  }, []);

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    setTableData(newTableData);
  };
  const handleEmptyCellChange = (rowIndex, colIndex, value) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = Number(value);
    setTableData(newTableData);
  };

  const calculateMean = (colIndex) => {
    const colData = tableData.map((row) => row[colIndex]).filter((value) => typeof value === 'number');
    const sum = colData.reduce((acc, curr) => acc + curr, 0);
    const meanValue = sum / (colData.length || 1);
    return meanValue;
  };

  function isDifferenceLessThan(pointA, pointB) {
    if (isNaN(pointA) || isNaN(pointB)) {
      throw new Error('Both inputs must be numeric');
    }
    return pointA - pointB < 0.001;
  }
  

  const checkAnswer = (colIndex) => {
    if (tableData !== null) {
      const actualValue = tableData[emptyCellIndexes[colIndex].rowIndex][colIndex];
      const inputElement = document.getElementById(`cell-${colIndex}`);
      const userGuess = inputElement !== null ? Number(inputElement.value) : null;
      const isCorrect = isDifferenceLessThan(actualValue, userGuess);
      const resultText = isCorrect ? "true" : "false";
  
      console.log(isCorrect); // output the boolean value
  
      setShowSolution(true);
      setSolutions((prevState) => [...prevState, {
        colIndex,
        mean: calculateMean(colIndex),
        value: actualValue,
        resultText: resultText,
      }]);
  
      return isCorrect;
    } else {
      return false;
    }
  };
  
  const [showSolution, setShowSolution] = useState(false);
  const [solutions, setSolutions] = useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: 80}}>DSAI GAME</h1>
      <h2 style={{ textAlign: "center" }}>FIND THE MISSING, LET'S CHECK YOUR STATISTICS !</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellValue, colIndex) => (
                <td key={colIndex}>
                  {emptyCellIndexes[colIndex].rowIndex === rowIndex ? (
                    <>
                      <input type="number" value={cellValue} onChange={(e) => handleEmptyCellChange(rowIndex, colIndex, e.target.value)} style={{ border: "1px solid black", width: "70%", padding: "0.5rem", borderRadius: "5px" }}/>
                      <button className ='ds'onClick={() => checkAnswer(colIndex)}>Check</button>
                    </>
                  ) : (
                    cellValue
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <h2 style={{ textAlign: "center" }}>Solution</h2>
      <ul>
        {solutions.map((solution) => (
          <li key={solution.colIndex}>
            Column {solution.colIndex}:
            <ul>
              <li>Mean: {solution.mean}</li>
              <li>Your Answer: {solution.value}</li>
              {/* <li>Correct: {solution.resultText}</li> */}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Table;