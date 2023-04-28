import "./App.css";
import Website from "./components/welcome";
const App = () => {
  const clickHandler = (name) => {
    alert("Hi" + " " + name);
  };
  return (
    <div className="App">
      <Website
        name="Ehsan"
        age="??"
        handler={() =>
          clickHandler("Ehsan")
        }
      />
      <Website
        name="Mehrdad"
        age="32"
        handler={() =>
          clickHandler("Mehrdad")
        }
      />
    </div>
  );
};

export default App;
