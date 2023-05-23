for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let sum = 0;

for (let i = 1; i < 10; i++) {
  sum = sum + i;
}

console.log(sum);

let input = 8;
for (let i = 1; i <= input; i++) {
  let r = i * i * i;
  console.log("cube of " + i + " = " + r);
}

let input = 8;
for (let i = 1; i <= input; i++) {
  let r = input * i;
  //   console.log(input + " X " + i + " = " + r);
  console.log(`${input} X ${i} = ${r}`);
}

for (let i = 1; i <= 8; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s = s + "*";
  }
  console.log(s);
}

for (let i = 1; i <= 8; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s = s + j;
  }
  console.log(`${s}`);
}

for (let i = 1; i <= 8; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s = s + i;
  }
  console.log(`${s}`);
}
