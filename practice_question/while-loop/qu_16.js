// Find the largest digit of a number
let number = 67493;
let p = number;
let Ldigit = 0;

while (p > 0) {
  let digit = p % 10;
  if (Ldigit > digit) {
    Ldigit = digit;
  }
  p++;
}
console.log(Ldigit);
