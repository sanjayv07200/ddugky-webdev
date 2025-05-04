// Print second largest number in an array
const find_l1_l2 = function (arr) {
  let index = 0;
  let l1 = 0;
  let l2 = 0;

  while (index < arr.length) {
    let num = arr[index];
    if (num > l1) {
      l2 = l1;
      l1 = num;
    }
    if (num > l2 && num != l1) {
      l2 = num;
    }
    index++;
  }
  return l2;
};
const ans = find_l1_l2([12, 14, 2, 34, 56]);
console.log("second largest element :", ans);
