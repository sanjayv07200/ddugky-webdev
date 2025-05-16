//Convert a string to camelCase by chaining string methods.

const makeUpperFirst = function (word) {
  const chArr = word.split("");
  const res = chArr.map(function (ch, i) {
    if (i == 0) return ch.toUpperCase();
    else return ch.toLowerCase();
  });
  return res.join("");
};
const camelCase = function (sentence) {
  const sentenceArr = sentence.toLowerCase().split(" ");
  const res = sentenceArr.map(function (word, i) {
    if (i == 0) return word;
    return makeUpperFirst(word);
  });
  return res.join("");
};
const ans = camelCase("NAMASTE INDIA");
console.log(ans);
