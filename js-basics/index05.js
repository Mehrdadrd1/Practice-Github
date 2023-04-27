//3. Function
// A function is basically a set of statements that performs a task or calculate a value

//1.Performing a task
function sayHello() {
  console.log("Hello World");
}

sayHello();

//name is an input in this function that we work with.
//name is not accesible outside of the function
function greet(name, lastNAme) {
  console.log(
    "Hello " + name + " " + lastNAme
  );
}

greet("Mehrdad", "Rayati");
greet("Harry", "Rayati");

//2.calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
console.log(square(5));
