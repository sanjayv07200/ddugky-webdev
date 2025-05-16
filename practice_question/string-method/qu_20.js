//Take a string input,
//convert it to lowercase,
//remove vowels, and reverse it.

//s0 = "SANJAY" --lowercase()
//s1 = "sanjay" -- split
//s2 = ["s","a","n,"j","a","y"] --- filter
//s3 = ["s","n","j","y"]  ---reverse
//s4 =yjns
const isVowel = function (ch) {
  return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";
};
const cleanVowel = function (str) {
  const res = str
    .toLowerCase()
    .split("")
    .filter(function (ch) {
      return !isVowel(ch);
    })
    .reverse()
    .join("");
  return res;
};
const ans = cleanVowel("vasuniya");
console.log(ans);
