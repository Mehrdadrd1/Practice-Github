function foo() {
  function bar() {
    console.log("Bar!");
  }

  return bar;
}

let x = foo();

x();
