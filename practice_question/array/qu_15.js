//Count negative numbers
//Count how many negative numbers are present in the array using a while loop.

let arr = [-13, 34, -34, -13, -24, 67, -67];
let index = 0;
let neg_num = null;
let count = 0;

while (index < arr.length) {
  let num = arr[index];
  if (num < 0) {
    neg_num = num;
    console.log(neg_num);
    count++;
  }
  index++;
}
console.log("count of negative numbers:", count);
