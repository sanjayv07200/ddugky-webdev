//Print second largest number in an array
let arr = [1, 5, 6, 3, 4];
let index = 0;
let l = 0;
let L2 = 0;

while (index < arr.length) {
  if (arr[index] > l) {
    L2 = l;
    l = arr[index];
  }
  index++;
}
console.log(l);
console.log(L2);
