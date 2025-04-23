//Print alternate elements
//Print every second element from the array (like 1st, 3rd, 5th...) using a while loop.
let arr = [2, 4, 3, 8, 10, 3, 4, 34, 56, 67];
let index = 0;

while (index < arr.length) {
  let num = arr[index];
  if (arr.indexOf(num) % 2 !== 0) {
    console.log(num);
  }
  index++;
}
