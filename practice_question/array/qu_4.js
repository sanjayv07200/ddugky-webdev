//count all odd numbers in an array
const count_odd = function (arr) {
  let index = 0;
  let count = null;
  while (index < arr.length) {
    if (arr[index] % 2 == 1) {
      count++;
    }
    index++;
  }
  return count;
};
const ans = count_odd([12, 15, 13, 16, 17]);
console.log("count of odd element:", ans);
