let propertyName = "lastName";

let person = {
  name: "Hoora",
  nickName: "agent 007",
  age: 20,
  idNumber: "007",
  "address and city name":
    "NewYork, Manhattan...",
  [propertyName]: "Rayati",
};

console.log(`Agent Name: ${person.name}`);
let y = person["nickName"];
console.log(`Agents Nickname: ${y}`);

let x = person["address and city name"];
console.log(`Agent Address: ${x}`);

console.log(person);
