import React from "react";

import Product from "./Product";

const cardArray = [
  {
    key: 1,
    header: "Lorem",
    para: "Lorem Ipsum Dolor Set",
    link: "link",
    title: false
  },
  {
    key: 2,
    header: "Ipsum",
    para: "Lorem Ipsum Dolor Set",
    link: "link",
    title: true
  },
  {
    key: 3,
    header: "Dolor",
    para: "Lorem Ipsum Dolor Set",
    link: "link",
    title: true
  }
];

const cardComponent = cardArray.map(item => (
  <Product key={item.key} card={item} />
));

function App() {
  return <ul>{cardComponent}</ul>;
}

export default App;
