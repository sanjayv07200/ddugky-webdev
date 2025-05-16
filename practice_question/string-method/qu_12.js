//Write a function that takes a string, removes all spaces, and converts it to uppercase.
const sentences = function (sent) {
  let strArr = sent.toUpperCase().split(" ");
  const ans = strArr.filter(function (word) {
    if (word != "") return word;
  });
  return ans.join(" ");
};
const res = sentences("this    is   my     dog");
console.log(res);
