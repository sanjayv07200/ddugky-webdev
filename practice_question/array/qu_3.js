// Calculate sum of all array elements
let arr = [1, 2, 4, 3, 5, 6];
let p = arr;
let idx = 0;
let sum = 0;
while (idx < arr.length) {
  sum = sum + p[idx];
  idx++;
}
console.log(sum);
