const Counter = () => {
  return [
    <div>
      <p>you clicked 2 times</p>
      <button onClick={() => alert("clicked")}>
        click me!
      </button>
    </div>,
  ];
};

export default Counter;
