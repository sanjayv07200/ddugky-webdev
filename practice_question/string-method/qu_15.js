//Given a sentence, return only the first 10 characters
// in uppercase with no spaces.
const sentence = function (sent) {
  const sentenceArr = sent.toUpperCase().split(" ");
  const res = sentenceArr.filter(function (ch) {
    if (ch != "") return ch;
  });
  return res.join("");
};
const ans = sentence("today is my day i will prove it");
const ans2 = ans.slice(0, 10);
console.log(ans2);
