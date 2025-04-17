//print the last non zero digit of number
let number = 2346000000;
let p = number;

while (p > 0) {
  let digit = p % 10;
  if (digit != 0) {
    console.log(digit);
    break;
  }
  p = Math.trunc(p / 10);
}
