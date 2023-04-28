import { useState } from "react";

import "./App.css";
import Website from "./components/welcome";
import Counter from "./components/counter/counter";
const App = () => {
  const clickHandler = (name) => {
    <div>alert("Hi" + " " + name);</div>;
  };
  const actionLink = (e) => {
    {
      /*
      use above func for preventing default behavior of func
      */
    }
    e.preventDefault();
    console.log("persiajs.dev");
  };

  const [isToggleOn, setIsToggleOn] =
    useState(true);
  const handletoggleclick = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <div className="App">
      {/*
     
      <Website
        name="Mehran"
        age={41}
        handler={() => clickHandler("Mehran")}
      />
      <Website
        name="Mehrdad"
        age={32}
        handler={() => clickHandler("Mehrdad")}
      />*/}
      {/*
      <Counter />
      */}

      <Counter />
      <a
        target="blank"
        href="http://persiajs.dev"
        onClick={actionLink}
      >
        Click ME
      </a>
      <button onClick={handletoggleclick}>
        {isToggleOn ? `ON` : `OFF`}
      </button>
    </div>
  );
};

export default App;
