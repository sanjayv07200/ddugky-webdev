//create a number using all element of an array
const number_arr = function (arr) {
  let index = 0;
  let number = 0;
  while (index < arr.length) {
    let p = arr[index];
    if (p <= 9) {
      number = number * 10 + p;
      console.log(p);
    }
    if (p >= 10) {
      number = number * 100 + p;
    }
    index++;
  }
  return number;
};
const ans = number_arr([10, 21, 33, 4]);
console.log("number using array elements :", ans);
