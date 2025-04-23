//replace the negative number with zero
let arr = [23, 45, -14, -35, 5];
let index = 0;

while (index < arr.length) {
  let num = arr[index];
  if (num < 0) {
    arr[index] = 0;
  }
  index++;
}
console.log(arr);
