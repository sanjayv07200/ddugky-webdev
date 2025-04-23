//Find index of minimum element
//Find the index of the smallest number in an array using a while loop.
let arr = [2, 4, -67, 6, 5];
let index = 0;
let low_num = Number.MAX_SAFE_INTEGER;

while (index < arr.length) {
  let num = arr[index];
  if (num < low_num) {
    low_num = num;
    idx = index;
  }
  index++;
}
console.log("smallest element of array is:", low_num, "and index", idx);
