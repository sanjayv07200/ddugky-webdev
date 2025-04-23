// copy all element of an array and create an another array
let arr = [23, 4, 5, 67, 8, 4];
let arr2 = [];
let index = 0;

while (index < arr.length) {
  arr2[index] = arr[index];
  index++;
}
console.log(arr);
console.log(arr2);
