//count all odd numbers in an array
let arr = [1, 2, 4, 3, 5, 6];
let p = arr;
let idx = 0;
let count = 0;
while (idx < arr.length) {
  if (arr[idx] % 2 != 0) {
    count++;
  }
  idx++;
}
console.log(count);
