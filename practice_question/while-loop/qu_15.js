// check if the number is 4 digit number
num = 123478;
count = 0;
let d = 0;
while (num > 0) {
  let digit = num % 10;
  count++;
  num = Math.floor(num / 10);
}
console.log("count :", count);
if (count == 4) {
  console.log("number have 4 digit");
} else {
  console.log("number dont have 4 digit");
}
