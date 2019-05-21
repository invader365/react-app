import React from "react";

import todosData from "./todosData";

const listComponents = todosData.map(item => (
  <li key={item.id}>
    <label>
      <input type="checkbox" checked={item.completed} />
      {item.text}
    </label>
  </li>
));

function List() {
  return <ul>{listComponents}</ul>;
}

export default List;
