//1. Reverse a String
const reverseString = function (str) {
  const res = str.split("").reverse().join("");
  return res;
};
const ans = reverseString("sanjayvasuniya");
console.log(ans);
