//Find how many elements are greater than the average
//First find the average using a while loop, then count how many elements are greater than it
let arr = [12, 3, 4, 13, 45];
let index = 0;
let sum = null;
let count_num = 0;
let average = 0;
let lrg_num_count = 0;

while (index < arr.length) {
  let num = arr[index];
  sum += num;
  count_num++;
  average = sum / count_num;
  index++;
}
console.log("average of the element :", average);
index = 0;
while (index < arr.length) {
  num = arr[index];
  if (num > average) {
    lrg_num_count++;
  }
  index++;
}
console.log("count of number large than average:", lrg_num_count);
