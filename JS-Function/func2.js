function sayHello1(name) {
  let temp = name || "Mehrdad";
  return `Hello, ${temp}`;
}

let x = sayHello1(/*nasim*/);

console.log(x);

function sayHello2(name) {
  if (name === undefined) {
    name = "Nasim";
  }
  return `Hello, ${name}`;
}

let y = sayHello2();

console.log(y);

function sayHello3(name = "Hoora") {
  return `Hello, ${name}`;
}

let z = sayHello3();

console.log(z);
