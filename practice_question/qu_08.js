// find the factorial of number;

let number = 5;
let p = number;
let ans = 1;

while (p >= 1) {
  ans = ans * p;
  p--;
}

console.log("factorial of number :", number, "=", ans);
