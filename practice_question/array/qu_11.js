// check if the number exist in the array and print index
//  of value if it  found
const find_index = function (arr) {
  let index = 0;
  let number = 100;

  while (index < arr.length) {
    if (number == arr[index]) {
      arr.indexof(number);
    }
    index++;
  }
  return arr.indexof(number);
};
const ans = find_index([13, 2, 4, 5, 6]);
console.log(ans);
