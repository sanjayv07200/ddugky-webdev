//Given a string, return a new string where the first and last
// characters are removed and the rest is reversed.

const updatestring = function (str) {
  const newstr = str.split("").reverse();
  const res = newstr.slice(1, newstr.length - 1).join("");
  return res;
};
const ans = updatestring("sanjay");
console.log(ans);
