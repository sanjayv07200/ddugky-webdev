//Shift array left by one position
//Write a program to shift all elements one position to the left using a while loop.

const shift_element = function (arr) {
  let index = 1;

  while (index < arr.length) {
    arr[index - 1] = arr[index];
    if (arr[index] == arr[arr.length - 1]) arr[arr.length - 1] = null;
    index++;
  }
  return arr;
};
const ans = shift_element(["a", "b", "c", "d", "e"]);
const ans2 = shift_element([8, 9, 6, 7, 5]);
console.log("arr =", ans, "arr2 = ", ans2);
