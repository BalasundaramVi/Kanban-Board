import React from 'react';

import Header from './Header';
import Board from './Board';
import initialData from '../utils/initial-data';

import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: initialData.tasks,
      columns: initialData.columns,
      columnOrder: initialData.columnOrder,
      taskCount: initialData.taskCount,
      columnCount: initialData.columnCount,
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (result.destination === null) {
      return;
    }
    const { columns } = this.state;
    const start = result.source.droppableId;
    const startIndex = result.source.index;
    const end = result.destination.droppableId;
    const endIndex = result.destination.index;

    const task = result.draggableId;
    columns[start].tasks.splice(startIndex, 1);
    columns[end].tasks.splice(endIndex, 0, task);
    this.setState({ columns });
  }

  render() {
    const {
      columns,
      columnOrder,
      tasks,
      taskCount,
      columnCount,
    } = this.state;

    return (
      <div className="application">
        <Header />
        <Board
          columns={columns}
          columnOrder={columnOrder}
          tasks={tasks}
          taskCount={taskCount}
          columnCount={columnCount}
          onDragEnd={this.onDragEnd}
        />
      </div>
    );
  }
}

export default App;
