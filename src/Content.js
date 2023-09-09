import { useState } from "react";
import React from "react";

const Content = () => {
  const [name, setName] = useState("Mike");
  const handleNameChange = () => {
    const names = ["Mike", "Kevin", "Bob"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => handleClick3(e)}>Click me!</button>
    </main>
  );
};

export default Content;
