// check if array contains all positive number
let arr = [0, 2, -23, 4, 5];
let index = 0;
let result = true;

while (index < arr.length) {
  num = arr[index];
  if (num < 0) {
    res = false;
    break;
  }
  index++;
}
console.log(res);
