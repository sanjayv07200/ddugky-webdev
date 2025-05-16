//Find the maximum number
const arr3 = [2, 5, 8, 10];
let lrg = Number.MIN_SAFE_INTEGER;
const res2 = arr3.reduce((lrg, currentvalue) => {
  if (lrg < currentvalue) lrg = currentvalue;
});
console.log(lrg);
