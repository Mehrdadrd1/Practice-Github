i = 1;
while (i <= 8) {
  console.log(i);
  i++;
}

do {
  console.log(i);
} while (i <= 8);

// '!==' means not even

let input = 123;
//321

let s = "";
while (input !== 0) {
  let p = input % 10;
  s = s + p;
  input = Math.floor(input / 10);
}

console.log(s);
