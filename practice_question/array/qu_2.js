// Print only even elements of an array
const even_element = function (arr) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] % 2 == 0) {
      console.log(arr[index]);
    }
    index++;
  }
};
even_element([100, 3, 49, 23, 24, 25]);
