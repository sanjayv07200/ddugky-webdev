//Given a full name string,
//return the initials in uppercase,
//separated by dots.

const shortName = function (fullName) {
  const fNameArr = fullName.toUpperCase().split(" ");
  const res = fNameArr.map(function (word) {
    const res1 = word.split("");
    return res1.at(0);
  });
  return res.join(".");
};
const ans = shortName("ravina singadiya");
console.log(ans);
