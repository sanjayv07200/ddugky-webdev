//roted array by one element
const reverse = function (arr) {
  let i = 0;
  let len = arr.length;
  while (i < len) {
    let left = arr[i];
    let right = arr[len - 1];
    console.log(left);
    console.log(right);
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    i++;
    i--;
  }
  return arr;
};
const res = reverse([1, 2, 3, 4]);
console.log(res);
