//Sum of all numbers
const arr = [1, 2, 3, 4, 6];
let initialvalue = 0;
const res = arr.reduce(
  (initialvalue, currentvalue) => initialvalue + currentvalue
);
console.log(res);
