import React, { Component } from "react";

import todosData from "./todosData";

class TodosList extends Component {
  constructor() {
    super();
    this.state = {
      todo: []
    };
    this.state.todo = todosData;
  }

  render() {
    const listComponents = this.state.todo.map(item => (
      <li key={item.id}>
        <label>
          <input type="checkbox" defaultChecked={item.completed} />
          {item.text}
        </label>
      </li>
    ));

    return <ul>{listComponents}</ul>;
  }
}

export default TodosList;
