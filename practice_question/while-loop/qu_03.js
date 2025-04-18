//print the count of the number
let num = 56789;
let count = 0;
let d = 0;
while (num > 0) {
  let digit = num % 10;
  d = d * 10 + digit;
  count++;
  num = Math.floor(num / 10);
}
console.log(d);
console.log("count :", count);
