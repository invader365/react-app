import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      one: "1",
      two: "2"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
}

export default App;
