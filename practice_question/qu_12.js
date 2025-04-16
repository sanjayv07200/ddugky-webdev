// print square of every digit in the number
let number = 5483;
let p = number;

while (p > 0) {
  let digit = p % 10;
  console.log("square of ", digit, "=", digit * digit);
  p = Math.trunc(p / 10);
}
