// search an element in array and return index of the specific element
const ele_search = function (arr, ele) {
  let i = 0;
  let res = -1;
  while (i < arr.length) {
    if (arr[i] == ele) {
      res = i;
      break;
    }
    i++;
  }
  return res;
};
const ans = ele_search([12, 3, 4, 56, 100], 100);
console.log(ans);
