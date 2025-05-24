/*:brain: Question 1 : Transform and Filter Usernames
You are given an array of user objects, each with a username property containing names in inconsistent formats (some have uppercase letters, spaces, special characters, or numbers).
Write a JavaScript function getCleanUsernames(users) that returns a new array of usernames that meet the following conditions:

    Only alphabetic characters are allowed (remove numbers, spaces, and special characters).
    All characters should be in lowercase.
    The username should be at least 4 characters long after cleaning.
    The final array should be sorted alphabetically in ascending order.

Your function must use method chaining and avoid loops (for, forEach, while, etc.).
Example Input:

const users = [
  { username: 'John_Doe123' },
  { username: '  alice! ' },
  { username: 'BoB' },
  { username: 'charlie99' },
  { username: 'eve@2020' }
];

Expected Output:

["alice", "charlie", "johndoe"]*/
const users = [
  { username: "John_Doe123" },
  { username: "  alice! " },
  { username: "BoB" },
  { username: "charlie99" },
  { username: "eve@2020" },
];

const getCleanUsernames = function (obj) {
  return obj
    .toLowerCase()
    .split("")
    .filter(function (ch) {
      const ascivalue = ch.charCodeAt(0);
      return ascivalue >= 97 && ascivalue <= 122;
    })
    .join("");
};

const res = users
  .map(function (user) {
    return getCleanUsernames(user.username);
  })
  .filter(function (word) {
    return word.length >= 4;
  })
  .sort((word1, word2) => word1.localeCompare(word2));
console.log(res);
