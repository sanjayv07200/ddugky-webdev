// print all the even number between 1 to 50 and count
let num = 1;
let count = 0;

while (num <= 50) {
  if (num % 2 == 0) {
    count++;
  }
  num++;
}
console.log("Count : ", count);
