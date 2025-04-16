// find the factorial of number;

let number = 5;
let ans = 1;

while (number >= 1) {
  ans = ans * number;
  number--;
}

console.log("factorial: ", ans);
