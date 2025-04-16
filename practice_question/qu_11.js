// Make a new number with the even digits of a number only in reverse order
let number = 454723;
let p = number;
let r = 0;

while (p > 0) {
  let digit = p % 10;
  if (digit % 2 == 0) r = r * 10 + digit;
  p = Math.trunc(p / 10);
}
console.log(r);
