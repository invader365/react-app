import React from "react";

function Main(props) {
  return (
    <main>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className={props && "debug"}>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
    </main>
  );
}

export default Main;
