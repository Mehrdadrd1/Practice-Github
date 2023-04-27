// Reference Types

//1. Objecs
let person1 = {
  name: "Mehrdad",
  age: 32,
};
const person2 = {
  name: "Mehrdad",
  age: 32,
};

// Dot Notation(defult choice)
person1.name = "Harry";
person1.age = 1;

// Bracket Notation
person2["age"] = 41;
person2["name"] = "Mehran";

console.log(person1.age, person2.name);
