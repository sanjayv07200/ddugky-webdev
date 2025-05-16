// find min and max in an array
const min_max = function (arr) {
  let i = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  while (i < arr.length) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    i++;
  }
  return [min, max];
};
const res = min_max([12, 34, 5, 67, 80]);
console.log(res);
