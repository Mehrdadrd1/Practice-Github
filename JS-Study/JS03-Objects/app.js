function creatPerson(firstNAme, lastNAme, age) {
  return {
    firstNAme,
    lastNAme,
    age,
    printInfo: function () {
      console.log(`Fullname: ${firstNAme} ${lastNAme}, Age: ${age} `);
    },
  };
}

let p1 = creatPerson("Horra", "Rayati", 3.5);
p1.printInfo();

let p2 = creatPerson("Nasim", "Ahmadi", 30);
p2.printInfo();
