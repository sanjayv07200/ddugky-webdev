// Print second largest number in an array
let arr = [2, 4, 6, 6, 5, 6];
let index = 0;

let lrg = 0;
let lrg2 = 0;

while (index < arr.length) {
  let num = arr[index];

  if (num > lrg) {
    lrg2 = lrg;
    lrg = num;
  }
  if (num != lrg && num > lrg2) {
    lrg2 = num;
  }

  index++;
}

console.log("Lrg : ", lrg, "Lrg2 : ", lrg2);
