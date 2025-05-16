// find pivot index of an array
const get_sum = function (sI, eI, arr) {
  let index = sI;
  sum = 0;
  while (sI < eI) {
    sum = sum + arr[sI];
    index++;
  }
  return sum;
};
const ans = get_sum(0, 2, [1, 2, 3, 4]);
console.log(ans);

// const get_pivot_index = function (arr) {
//   let index = 0;
//   pivot_index = -1;
//   while (index < arr.length) {
//     let ls = get_sum(0, index - 1, arr);
//     let rs = get_sum(index + 1, arr.length - 1, arr);

//     if (ls == rs) {
//       pivot_index = index;
//     }
//     index++;
//   }
//   return pivot_index;
// };
// const ans = get_pivot_index([1, 1, 0, 1, 1]);
// console.log(ans);
