// check if the number exist in the array and print index
//  of value if it  found

let arr = [1, 4, 2, 45, 76];
let number = 45;
let index = 0;
let res = null;

while (index < arr.length) {
  if (arr[index] == number) res = index;
  index++;
}
console.log("index of the number ", number, "is:", res);
