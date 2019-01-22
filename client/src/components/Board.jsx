import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ columns, columnOrder }) => (
  <div className="board">
    {columnOrder.map((col, i) => (
      <div className={`col col_${i}`} key={`${columns[columnOrder[i]].id}`}>
        <h3>COL</h3>
      </div>
    ))}
  </div>
);

Board.propTypes = {
  columns: PropTypes.objectOf(PropTypes.Object),
  columnOrder: PropTypes.arrayOf(PropTypes.string),
};

Board.defaultProps = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      tasks: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Finished',
      tasks: ['task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default Board;
