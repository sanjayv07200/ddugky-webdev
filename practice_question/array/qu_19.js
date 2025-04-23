//Swap first and last elements
//Use a while loop to swap the first and last elements of an array.
let arr = [1, 2, 3, 4;
let index = 0;
let first_element = 0;
let last_element = 0;

while (index < arr.length) {
  let num = arr[index];
  if (num == arr[0]) {
    first_element = num;
  }
  if (num == arr.length) {
    last_element = num;
  }
  index++;
}
console.log("------before swapping-----");
console.log("first element:", first_element);
console.log("last element:", last_element);
console.log("------after swapping------");
let a = first_element;
let b = last_element;
let temp = 0;

console.log(b);
console.log(a);
