// found the occurence of a number in an array
let arr = [1, 4, 2, 45, 45, 76, 45];
let number = 100;
let index = 0;
let count = 0;

while (index < arr.length) {
  if (arr[index] == number) {
    count++;
  }
  index++;
}
console.log("count of the number ", number, "in arrary is :", count);
