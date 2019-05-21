import React from "react";

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nancy",
      age: "20"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default Component;
