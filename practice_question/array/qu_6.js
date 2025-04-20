//Print the array elemnets which are multiples of 2 & 3 both
let arr = [1, 2, 4, 3, 5, 6, 12, 18];
let p = arr;
let idx = 0;

while (idx < arr.length) {
  if (arr[idx] % 2 == 0 && arr[idx] % 3 == 0) {
    console.log(arr[idx]);
  }
  idx++;
}
