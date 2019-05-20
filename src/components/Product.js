import React from "react";

function Product(props) {
  return (
    <li>
      <h3>{props.card.header}</h3>
      <p>{props.card.para}</p>
      <a href="#" title={props.card.title && "has-title"}>
        {props.card.link}
      </a>
      <button>See more</button>
      <hr />
    </li>
  );
}

export default Product;
