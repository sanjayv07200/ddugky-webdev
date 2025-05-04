//Print the largest number in the array
const lrg_element = function (arr) {
  let index = 0;
  let lrg_num = null;

  while (index < arr.length) {
    let num = arr[index];
    if (num > lrg_num) {
      lrg_num = arr[index];
    }
    index++;
  }
  return lrg_num;
};
const ans = lrg_element([12, 3, 5, 46, 78]);
console.log(ans);
