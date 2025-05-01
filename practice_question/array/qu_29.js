//Merge two arrays
//Given two arrays, use a while loop to merge them into one.

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let index = 0;

while (index < arr2.length) {
  let num = arr2[index];
  arr[arr.length] = num;
  index++;
}
console.log(arr);
