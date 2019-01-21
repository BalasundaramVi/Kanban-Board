import React from 'react';

const Board = ({ columns, columnOrder }) => (
  <div className="board">
    {columnOrder.map((col, i) => (
      <div className={`col col_${i}`} key={`${columns[columnOrder[i]].id}`}>
        <h3>COL</h3>
      </div>
    ))}
  </div>
);

export default Board;
