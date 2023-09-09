import { useState } from "react";
import React from "react";

const Content = () => {
  const [name, setName] = useState("Mike");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Mike", "Kevin", "Bob"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    console.log(name);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleNameChange}>Hello {name}!</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => handleClick3(e)}>Click me!</button>
    </main>
  );
};

export default Content;

//1.01.35
