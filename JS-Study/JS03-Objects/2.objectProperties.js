//access to Objects "properties"

let person1 = new Object();
person1.name = "Mehrdad";
person1.age = 32;
person1.address = "Rasht";
person1["avenue"] = "Charbagh";

console.log(person1.name);
console.log(person1["age"]);
console.log(person1.lastName); //undefined

/*change homonymous names in whole file =

1.select the fileName
2.press F2
3.change the name 

*/
