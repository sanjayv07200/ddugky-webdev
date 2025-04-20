//create a number using all element of an array
let arr = [1, 2, 4, 3, 5, 6];
let p = arr;
let idx = 0;
let number = 0;
while (idx < arr.length) {
  Unumber = Unumber * 10 + arr[idx];
  idx++;
}
console.log("number:-", number);
