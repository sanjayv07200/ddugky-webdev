// Print the power of a given number
let num = 5;
let power = 3;

let p = power;
let ans = 1;

while (p >= 1) {
  ans = ans * num;
  p--;
}

console.log(num, "to the power", power, "=", ans);
