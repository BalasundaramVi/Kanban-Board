import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';

import '../styles/Board.css';

const Board = ({ columns, columnOrder, tasks, taskCount, columnCount }) => (
  <div className="board">
    {columnOrder.map((col, i) => {
      const colTasks = [];
      columns[col].tasks.map(task => (
        colTasks.push(tasks[task])
      ));
      return (
        <div className={`col col_${i}`} key={`${columns[col].id}`}>
          <h3 className="col-title">{columns[col].title}</h3>
          <Column index={i} tasks={colTasks} taskCount={taskCount} />
        </div>
      );
    })}
  </div>
);

Board.propTypes = {
  columns: PropTypes.objectOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]))),
  columnOrder: PropTypes.arrayOf(PropTypes.string),
  tasks: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  taskCount: PropTypes.number,
  columnCount: PropTypes.number,
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
  tasks: {
    'task-1': { id: 'task-1', content: 'Do Laundry' },
    'task-2': { id: 'task-2', content: 'Watch TV' },
    'task-3': { id: 'task-3', content: 'Clean Apartment' },
    'task-4': { id: 'task-4', content: 'Read Book' },
  },
  columnOrder: ['column-1', 'column-2'],
  taskCount: 2,
  columnCount: 1,
};

export default Board;
