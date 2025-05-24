//find all the divisor of an number
const num = 13;
let i = 1;
count = 0;
let factorArr = [];

while (i <= 20) {
  if (num % i == 0) {
    factorArr.push(i);
    count++;
  }
  i++;
}
console.log("divisor of", num, ":-", factorArr.join(","));
if (count == 2) {
  console.log(num, ":its a prime number");
} else {
  console.log(num, ":its not a prime number");
}
