//Write a function that takes a string, trims it,
//and replaces the first and last characters with *.

//s0 = "  sanjay  " -----trim
//s1 = "sanjay"  ------map
//s2 =  *anja*

const st = function (str) {
  const newStr = str.trim().split("");
  const newStrArr = newStr.map(function (ch, i) {
    if (i == 0 || i == newStr.length - 1) return (newStr[i] = "*");
    else return newStr[i];
  });
  return newStrArr.join("");
};
const ans = st("sanjay");
console.log(ans);
