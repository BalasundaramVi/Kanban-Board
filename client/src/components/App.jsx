import React from 'react';

import Header from './Header';

import '../styles/App';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <div className="application">
        <Header />
        <div>
          <h1>BOARD</h1>
        </div>
      </div>
    );
  }
};

export default App;
