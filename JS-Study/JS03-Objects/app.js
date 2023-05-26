function createCar(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

let x = createCar("Mercedes Benz", "S600", 2022);
console.log(x);
