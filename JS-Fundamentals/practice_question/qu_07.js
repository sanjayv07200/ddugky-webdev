// count the number of factor
let num = 12;
let pointer = 0;
let count = 0;

while (pointer <= num) {
  if (num % pointer == 0) {
    count++;
  }
  pointer++;
}

console.log(" factor count:", count);
console.log("num:", num);
if (count == 2) {
  console.log("its a prime number");
} else {
  console.log("its not a prime number");
}
