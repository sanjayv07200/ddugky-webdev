/*1234: Question 4: Extract Valid Numbers and Sort
You are given an array of mixed strings, where each string might contain alphabetic characters, symbols, and digits.
Write a function extractAndSortNumbers(arr) that:

    Extracts only the numeric characters from each string.
    Converts the result to a number.
    Filters out any values that result in an empty string or NaN.
    Returns a sorted array of valid numbers in ascending order.
> Must use method chaining and no loops.
Example Input:*/

const input = ["a12b", "##98", "hello123", "$$", "0042"];

const getnum = function (str) {
  const numStr = str
    .split("")
    .filter(function (ch) {
      const ascivalue = ch.charCodeAt(0);
      return ascivalue >= 48 && ascivalue <= 57;
    })
    .join("");
  if (numStr == "") return NaN;
  return Number(numStr);
};
const numRes = input
  .map((str) => getnum(str))
  .filter((num) => !isNaN(num))
  .sort((a, b) => a - b);

console.log(numRes);
