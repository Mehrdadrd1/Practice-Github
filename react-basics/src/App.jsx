import "./App.css";
import Website from "./components/welcome";
import counter from "./components/counter";
import Counter from "./components/counter";
const App = () => {
  const clickHandler = (name) => {
    <div>alert("Hi" + " " + name);</div>;
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
      <Counter />
    </div>
  );
};

export default App;
