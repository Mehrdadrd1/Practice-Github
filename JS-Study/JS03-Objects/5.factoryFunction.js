//constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let myCar = new Car(
  "Mercedes Benz",
  "S500",
  2016
);

let anotherCar = new Car("BMW", "Z4", 2018);
console.log(myCar);
console.log(anotherCar);

//factoryFunction

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

let x = createCar("Mercedes Benz", "S600", 2022);
console.log(x);
