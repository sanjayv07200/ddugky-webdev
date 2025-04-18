// print the first digit of  number
let number = 7890;
let digit = null;

while (number > 0) {
  digit = number % 10;
  number = Math.trunc(number / 10);
}

console.log("first digit of the number is :", digit);
