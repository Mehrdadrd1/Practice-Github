import propTypes from "prop-types";
const Welcome = (props) => {
  return [<div>{props.children}</div>];
};

const Website = (props) => {
  return [
    <div>
      <Welcome>
        <h1>
          Welcome to React-dev By Tech Titans
        </h1>
        <h2>Test</h2>
      </Welcome>

      <h2>Persiajs.dev</h2>
      <p
        onClick={props.handler}
        key={Website.element}
      >
        My name is {props.name} and I am{" "}
        {props.age} years old
      </p>
    </div>,
  ];
};

export default Website;
Website.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  handler: propTypes.func,
};
Welcome.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};
