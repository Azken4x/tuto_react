import { useState } from "react";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "one half pound bag of cocoa" },
    { id: 2, checked: true, item: "item 2" },
    { id: 3, checked: true, item: "item 3" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0"></FaTrashAlt>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
