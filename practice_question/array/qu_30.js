//Remove all zeros from the array
//Use a while loop to create a new array that excludes all zeros from the original.
let arr = [2, 0, 3, 0, 0, 8];
let index = 0;

while (index < arr.length) {
  if (arr[index] == 0) arr[index] = null;
  index++;
}
console.log(arr);
