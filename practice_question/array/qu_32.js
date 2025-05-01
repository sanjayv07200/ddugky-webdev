// find pivot index of an array
const get_sum = function (arr, sI, eI) {
  let i = sI;
  let sum = 0;
  while (i <= eI) {
    sum += arr[i];
    i++;
  }
  return sum;
};

const get_pivot_index = function (arr) {
  let res = -1;
  let i = 0;
  while (i < arr.length) {
    const ls = get_sum(arr, 0, i - 1);
    const rs = get_sum(arr, i + 1, arr.length - 1);
    if (ls == rs) {
      res = i;
      break;
    }
    i++;
  }
  return res;
};

const res = get_pivot_index([1, 1, 0, 1, 1]);
console.log(res);
