//Swap first and last elements
//Use a while loop to swap the first and last elements of an array.
let arr = [47, 2, 3, 4, 45, 67];
let index = 0;
let lindex = arr.length;
let first_element = 0;
let last_element = 0;

while (index < arr.length) {
  first_element = arr[index];
  last_element = arr[lindex - 1];

  let temp = first_element;
  first_element = last_element;
  last_element = temp;

  index++;
  lindex--;
}
