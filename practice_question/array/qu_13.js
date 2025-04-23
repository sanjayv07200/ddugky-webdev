//Calculate average of array elements//
// Find and print the average of all numbers in an array using a while loop.
let arr = [2, 4, 5, 6];
let sum = 0;
let index = 0;

while (index < arr.length) {
  let num = arr[index];
  sum = sum + num;
  index++;
}
console.log("sum to total element:", sum);
console.log("count of elements:", arr.length);
console.log("average of the array elements:", sum / arr.length);
