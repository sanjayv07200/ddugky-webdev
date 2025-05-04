// copy all element of an array and create an another array
const copy_arr = function (arr) {
  let index = 0;
  let arr2 = [];

  while (index < arr.length) {
    arr2.push(arr[index]);
    index++;
  }
  return arr2;
};
const ans = copy_arr([12, 14, 23, 45, 23]);
console.log(ans);
