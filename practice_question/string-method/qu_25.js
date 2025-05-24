/* Question 5: Unique First Characters
You are given an array of strings. Write a function getUniqueFirstLetters(arr) that:

    Trims each string and converts it to lowercase.
    Ignores any empty or falsy values (e.g., '', null, undefined).
    Extracts the first letter of each cleaned string.
    Returns an array of unique first letters, sorted alphabetically.
> Must be solved using method chaining, no loops, and only functional array methods.
Example Input:

const input = [' Apple', 'banana', '  Cherry', '', null, 'avocado', 'blueberry'];

Expected Output:

['a', 'b', 'c']*/
const input = [
  "banana",
  " Apple",
  "  Cherry",
  "",
  null,
  "avocado",
  "blueberry",
];

const res = Object.keys(
  input
    .filter((ele) => ele)
    .map((word) => word.trim().at(0).toLocaleLowerCase())
    .reduce(function (acc, ch) {
      acc[ch] = null;
      return acc;
    }, {})
).sort((a, b) => a.localeCompare(b));
console.log(res);
