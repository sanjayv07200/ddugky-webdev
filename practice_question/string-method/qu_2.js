// Capitalize First Letter of Each Word
const sentence = function (sentence) {
  let strArr = sentence.split(" ");
  let newstr = strArr.map((x) => x.toUpperCase());
  return newstr.join(" ");
};

const ans = sentence("this is a dog");
console.log(ans);
