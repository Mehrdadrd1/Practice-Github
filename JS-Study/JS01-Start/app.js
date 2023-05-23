//Fanction

/*
call
run
execute
invoke
dispatch
*/

//call

/*function sayHelloWorld() {
  console.log("befor return");
  return "Hello, World";
  console.log("after return");
}

let x = sayHelloWorld();
console.log(
  `return value of the function is ${x}`
);*/

//Tip:
//(1 !== 2) "!==" means not equal

function sayHelloWorld() {
  return "Hello, World";
}

let anotherInstant = sayHelloWorld;

//calling func
console.log(sayHelloWorld());

//referencing func
console.log(anotherInstant());
 