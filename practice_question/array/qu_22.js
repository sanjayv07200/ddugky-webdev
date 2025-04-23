//Create an array of squares
//Use a while loop to build a new array containing the square of each element from the original.
let arr = [1, 2, 3, 4];
let index = 0;
let res = [];

while (index < arr.length) {
  arr[index] = arr[index] ** 2;
  index++;
}
console.log(arr);
