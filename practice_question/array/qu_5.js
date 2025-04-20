//Print the largest number in the array
let arr = [1, 2, 4, 3, 5, 6];
let p = arr;
let idx = 0;
let Ldigit = 0;
while (idx < arr.length) {
  if (Ldigit < arr[idx]) Ldigit = arr[idx];
  idx++;
}
console.log(Ldigit);
