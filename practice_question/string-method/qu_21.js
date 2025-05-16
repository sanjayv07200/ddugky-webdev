const updateword = function (word) {
  return word
    .split("")
    .filter(function (ch) {
      const asciiVal = ch.toUpperCase().charCodeAt(0);
      return asciiVal >= 65 && asciiVal <= 90;
    })
    .map(function (ch, i) {
      if (i === 0) return ch.toUpperCase();
      else return ch.toLowerCase();
    })
    .join("");
};

const travelLog = [
  "##p@ar!is123",
  "to*kyO!!",
  "nEw%%yORK",
  "123", // invalid
  "@loNDon$%",
  "ba#ng@koK",
];

// Paris,Tokyo,London,Newyork,Bangkok

const res = travelLog
  .map(function (word) {
    return updateword(word);
  })
  .filter((word) => word !== "")
  .sort((a, b) => a.length - b.length)
  .join();

console.log(res);
