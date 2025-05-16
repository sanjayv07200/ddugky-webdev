//Write a function that takes a sentence
// and returns the sentence in all lowercase with
//  only the first letter capitalized.
const firstelementcapitle = function (word) {
  return word
    .split("")
    .map(function (ch, i) {
      if (i == 0) return ch.toUpperCase();
      else return ch.toLowerCase();
    })
    .join(" ");
};
const sentence = function (sent) {
  const sentenceArr = sent
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return firstelementcapitle(word);
    })
    .join(" ");
  return sentenceArr;
};
const ans = sentence("i love my india");
console.log(ans);
