function Person(firstNAme, lastNAme, age) {
  (this.firstNAme = firstNAme), (this.lastNAme = lastNAme), (this.age = age);

  this.printInfo = function () {
    console.log(
      `Fullname: ${this.firstNAme} ${this.lastNAme}, Age: ${this.age} `
    );
  };
}

let p1 = new Person("Horra", "Rayati", 3.5);
p1.printInfo();
// console.log(
//   `Fullname: ${p1.firstNAme} ${p1.lastNAme}, Age: ${p1.age} `
// );
let p2 = new Person("Nasim", "Ahmadi", 30);
p2.printInfo();
// console.log(
//   `Fullname: ${p2.firstNAme} ${p2.lastNAme}, Age: ${p1.age} `
// );
