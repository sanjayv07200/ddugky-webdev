// Calculate sum of all array elements
const sum_el_array = function (arr) {
  let index = 0;
  let sum = null;
  while (index < arr.length) {
    sum += arr[index];
    index++;
  }
  return sum;
};
const ans = sum_el_array([1, 2, 3, 4, 5]);
console.log(ans);
