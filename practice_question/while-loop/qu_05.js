// print the sum of the digits of a number

let Number = 1234;
let sum = 0;

while (Number > 0) {
  let digit = Number % 10;
  sum = sum + digit;
  Number = Math.floor(Number / 10);
}
console.log("sum of number's digit :", sum);
