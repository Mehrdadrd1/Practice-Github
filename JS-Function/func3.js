function doSomeWork(fn) {
  console.log("I am DoSomeWork");
  fn();
}

function foo() {
  console.log("I am foo");
}

function bar() {
  console.log("I am bar");
}

doSomeWork(foo);

doSomeWork(bar);
