import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import '../styles/Column.css';

const Column = ({ index, tasks, taskCount, id }) => (
  <Droppable droppableId={id}>
    {provided => (
      <ol className="column-tasks" ref={provided.innerRef} {...provided.droppableProps}>
        {tasks.map((task, i) => (
          <Draggable key={task.id} draggableId={task.id} index={i}>
            {dragProvided => (
              <li className={`task task_${i}`} key={task.id} {...dragProvided.draggableProps} {...dragProvided.dragHandleProps} ref={dragProvided.innerRef}>
                <p className="task-content">{ task.content }</p>
              </li>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </ol>
    )}
  </Droppable>
);

export default Column;
