// peak element
const peak_element = function (arr) {
  let i = 0;
  let res;
  while (i < arr.length) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i - 1]) res = i;
    i++;
  }
  return res;
};

const ans = peak_element([1, 0, 1, 5, 4]);
console.log(ans);
