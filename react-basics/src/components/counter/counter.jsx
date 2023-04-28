import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return [
    <div>
      <p className="tagStyle">
        you clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
      <input
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>,
  ];
};

export default Counter;
