//Write a function that trims a string,
//replaces all dashes - with spaces,
//and capitalizes each word.
const updatedSentence = function (sent) {
  const sentenceArr = sent.toUpperCase().replaceAll("-", " ");
  return sentenceArr;
};
const res1 = updatedSentence("this-is-sanjay-vasuniya");
console.log(res1);
