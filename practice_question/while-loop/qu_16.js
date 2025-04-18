// Find the largest digit of a number
let number = 214;
let p = number;
let digit = null;
while (p > 0) {
  digit = p % 10;
  p = Math.floor(p / 10);
}
console.log(digit);
