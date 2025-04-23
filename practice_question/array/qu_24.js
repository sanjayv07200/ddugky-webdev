// print the defference between max and min element
let arr = [34, 5, 7, 12, 89];
let index = 0;
let max = 0;
let min = Number.MAX_SAFE_INTEGER;

while (index < arr.length) {
  let num = arr[index];
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
  index++;
}
console.log("max number of the array is :", max);
console.log("min number of the array is :", min);
console.log("defference between max and min is:", max - min);
