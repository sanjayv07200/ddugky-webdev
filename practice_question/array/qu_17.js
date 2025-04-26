//Shift array left by one position
//Write a program to shift all elements one position to the left using a while loop.
let arr = [2, 4, 3, 8, 10];
let index = 1;

while (index < arr.length) {
  arr[index - 1] = arr[index];

  index++;
}
console.log(arr);
