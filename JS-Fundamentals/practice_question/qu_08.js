let number = 3;
let pointer = 0;
let factorial = 1;

while (number > pointer) {
  factorial = factorial * number;
  number--;
}
console.log(factorial);
