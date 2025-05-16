//Write a function that removes leading/trailing spaces,
//replaces multiple spaces with a single space, and returns
//the result in lowercase.

//s0 ="  sanjay   ";
// by trim method
//s1 =

const sentence = function (sent) {
  const newsentence = sent.trim().split(" ");
  const res = newsentence.filter(function (word) {
    if (word != "") return word;
  });
  return res.join(" ");
};
const ans = sentence("    its very   fantastic    programming     ");
console.log(ans);
