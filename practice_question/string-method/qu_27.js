/*Question 3 : Clean and Reverse Words
You are given a string containing multiple words separated by spaces, but some words may contain special characters, digits, or extra whitespace.
Write a function cleanAndReverseWords(str) that:

    Splits the string into words.
    Removes all non-alphabetic characters from each word.
    Converts each cleaned word to lowercase.
    Removes any empty strings that result after cleaning.
    Returns a new string where the cleaned words are in reverse order, joined by a single space.
> You must use method chaining and no loops (for, while, etc.).
Example Input:

const input = "  Hello123!   @World$$        this-- is45 ###JavaScript ";

Expected Output:

"javascript is this world hello"*/
const input = "  Hello123!   @World$$        this-- is45 ###JavaScript ";

const formateWord = function (word) {
  return word
    .split("")
    .filter(function (ch) {
      const asciiVal = ch.charCodeAt(0);
      return asciiVal >= 97 && asciiVal <= 122;
    })
    .join("");
};
const res = input
  .toLowerCase()
  .split(" ")
  .filter((word) => word != "")
  .map((word) => formateWord(word))
  .reverse()
  .join(" ");

console.log(res);
