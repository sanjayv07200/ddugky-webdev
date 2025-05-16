// peak element of an array
const peak_element = function (arr) {
  let i = 0;
  let len = arr.length;
  while (i < len) {
    const ele = arr[i];
    let left = arr[i - 1];
    if (i == 0) left = Number.NEGATIVE_INFINITY;
    let right = arr[i + 1];
    if (i == len - 1) right = Number.NEGATIVE_INFINITY;
    if (ele > left && ele > right) return i;
    i++;
  }
  return -1;
};
const res = peak_element([1, 2, 4, 6, 5, 7, 4]);
console.log(res);
