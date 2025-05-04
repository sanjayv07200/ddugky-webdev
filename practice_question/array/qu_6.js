//Print the array elemnets which are multiples of 2 & 3 both
const multiple = function (arr) {
  let index = 0;
  let arr2 = [];
  while (index < arr.length) {
    let p = arr[index];
    if (p % 2 == 0 && p % 3 == 0) {
      arr2.push(p);
    }
    index++;
  }
  return arr2;
};
const ans = multiple([1, 12, 23, 14, 24, 16]);
console.log(ans);
