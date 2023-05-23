let input = 29;
let isNotPrime = false;
for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    isNotPrime = true;
    break;
  }
}
if (isNotPrime === false) {
  console.log(`${input} is a prime number`);
} else {
  console.log(`${input} is not a prime number`);
}
