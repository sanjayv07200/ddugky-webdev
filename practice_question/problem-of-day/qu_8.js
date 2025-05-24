// get sum using while loop
const num = [1, 2, 3, 4];
let i = 0;
let sum = 0;
while (i < num.length) {
  sum += num[1];
  i++;
}
console.log(sum);

// get sum using array reduce
const sum1 = num.reduce(function (acc, num) {
  acc += num;
  return acc;
}, 0);
console.log(sum1);

// create obj using while loop

let obj = {};
let index = 0;
while (index < num.length) {
  let val = num[index];
  let key = val - 1;
  if (obj[key] == undefined) obj[key] = val;
  index++;
}
console.log(obj);

// create obj using array reduce
const obj1 = num.reduce(function (acc, num) {
  let val = num;
  let key = val - 1;
  if (acc[key] == undefined) acc[key] = val;
  return acc;
}, {});
console.log(obj1);
