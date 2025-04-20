// Print only even elements of an array
let arr = [1, 2, 4, 3, 5, 6];
let p = arr;
let idx = 0;
while (idx < arr.length) {
  if (arr[idx] % 2 == 0) {
    console.log(arr[idx]);
  }
  idx++;
}
