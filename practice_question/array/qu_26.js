// find the sum of element at even idices of an array
let arr = [0, 2, 3, 4, 5];
let index = 0;
let sum = null;

while (index < arr.length) {
  let num = arr[index];
  if (arr.indexOf(num) % 2 == 0) {
    sum += num;
  }
  index++;
}
console.log("sum of the digit at even indices:", sum);
