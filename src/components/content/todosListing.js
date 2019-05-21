import React, { Component } from "react";

import todosData from "./todosData";

class List extends Component {
  constructor() {
    super();
  }
  render() {
    const listComponents = todosData.map(item => (
      <li key={item.id}>
        <label>
          <input type="checkbox" checked={item.completed} />
          {item.text}
        </label>
      </li>
    ));

    return <ul>{listComponents}</ul>;
  }
}

export default List;
