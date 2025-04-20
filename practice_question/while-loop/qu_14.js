// Print second last non zero digit of a number
let number = 2346000000;
let p = number;
let count = 0;
while (p > 0) {
  let digit = p % 10;
  if (digit != 0) {
    count++;
    if (count == 2) {
      console.log(digit);
      break;
    }
  }
  p = Math.trunc(p / 10);
}
