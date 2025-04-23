//Check if array is sorted (ascending)
//Write a while loop to check if the array is sorted in ascending order.
let arr = [1, 2, 3, 4];
let index = 1;
let res = true;

while (index < arr.length) {
  let num = arr[index];
  console.log(arr[index - 1]);
  console.log(num);
  if (num < arr[index - 1]) {
    res = false;
    break;
  }
  index++;
}
console.log(res);
