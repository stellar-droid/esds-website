import React, { useState, useEffect } from 'react';

export default function SquareGrid ({ size,size1 }) {
  const [grid, setGrid] = useState([]);

  // Function to generate a random 0 or 1
  const randomZeroOne = () => Math.random() < 0.5 ? 0 : 1;

  // Function to generate the grid with random 0s and 1s
  const generateGrid = () => {
    const newGrid = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size1; j++) {
        row.push(randomZeroOne());
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  // Generate the grid on initial render
  useEffect(() => {
    generateGrid();
  }, [size,size1]);

  return (
    <div className="square-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row1 animation_row">
          {row.map((value, colIndex) => (
            <div key={colIndex} className={`cell ${value === 0 ? 'zero' : 'one'}`}>
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


