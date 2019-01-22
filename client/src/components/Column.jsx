import React from 'react';

import '../styles/Column.css';

const Column = ({ index, tasks, taskCount }) => (
  <ol className="column-tasks">
    {tasks.map((task, i) => (
      <li className={`task task_${i}`} key={task.id}>
        <p className="task-content">{ task.content }</p>
      </li>
    ))}
  </ol>
);

export default Column;
