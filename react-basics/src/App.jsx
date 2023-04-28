import "./App.css";
import Website from "./components/welcome";
import { ReactPropTypes } from "react";
const App = () => {
  const clickHandler = (name) => {
    <div>
      alert("Hi" + " " + name);
    </div>;
  };
  return (
    <div className="App">
      <Website
        name="Mehran"
        age={41}
        handler={() =>
          clickHandler("Mehran")
        }
      />
      <Website
        name="Mehrdad"
        age={32}
        handler={() =>
          clickHandler("Mehrdad")
        }
      />
    </div>
  );
};

export default App;
