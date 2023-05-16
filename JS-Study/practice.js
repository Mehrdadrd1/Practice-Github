/* 121

121 / 10 >>> 1
12  / 10 >>> 2
1   / 10 >>> 1

*/

let input = 121;
let sum = 0;
let temp = input;

while (input / 10 !== 0) {
  let p = input % 10;
  input = Math.floor(input / 10);
  sum = sum * 10 + p;
}

if (temp === sum) {
  console.log(`${temp} is palindrome`);
} else {
  console.log(`${temp} is  not palindrome`);
}

//practice 2

let i = 100;
let sum = 0;

while (i < 200) {
  let p = i % 9;
  if (p === 0) {
    console.log(`${i} is divisible to 9`);
    sum = sum + i;
  }

  i++;
}

console.log(`sum = ${sum}`);

//practice 3

let input = 147;

for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    console.log(`${input} is not a prime number`);
    break;
  } else {
    console.log(`${input} is a prime number`);
  }
  break;
}
