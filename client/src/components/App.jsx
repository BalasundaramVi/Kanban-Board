import React from 'react';

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
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
};

export default App;
