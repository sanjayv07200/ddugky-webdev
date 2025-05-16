//find the largest number in an array
const lrg_number = function (arr) {
  let i = 0;
  let lrg = Number.MIN_SAFE_INTEGER;
  while (i < arr.length) {
    if (arr[i] > lrg) lrg = arr[i];
    i++;
  }
  return lrg;
};
const ans = lrg_number([14, 35, 6, 7, -80]);
console.log(ans);
