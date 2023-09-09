import { useState } from "react";
import React from "react";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "one half pound bag of cocoa" },
    { id: 2, checked: true, item: "item 2" },
  ]);

  return <main></main>;
};

export default Content;
