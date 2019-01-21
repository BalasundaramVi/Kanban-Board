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
  }

  render() {
    const { columns, columnOrder } = this.state;
    return (
      <div className="application">
        <Header />
        <Board columns={columns} columnOrder={columnOrder} />
      </div>
    );
  }
};

export default App;
