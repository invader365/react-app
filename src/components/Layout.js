import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

function Components() {
  const brandArray = [
    {
      key: 1,
      company: "Huawei",
      feats: "Y6"
    },
    {
      key: 2,
      company: "Honor",
      feats: "A8"
    }
  ];

  const brandComponent = brandArray.map(item => (
    <Header key={item.key} brand={item} />
  ));

  return (
    <React.Fragment>
      {brandComponent}
      <Main />
    </React.Fragment>
  );
}

export default Components;
