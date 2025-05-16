//Count the Number of Vowels
const count_Vowel = function (str) {
  let Vowels = ["a", "e", "i", "o", "u"];
  let index = 0;
  let count = 0;
  let strArr;
  while (index < Vowels.length) {
    strArr = str.toLowerCase().split("");
    if (Vowels[index] == str.strArr) {
      count++;
      index++;
    }

    index++;
  }
  return [strArr, count];
};
const ans = count_Vowel("This is sanjay");
console.log(ans);
