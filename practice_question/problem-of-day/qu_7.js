//find lcm and hcm of the number

let num1 = 3;
let num2 = 9;
let i = 0;
let lcmGcdArr = [];
while (i <= num1 && num2) {
  if (num1 % i == 0 && num2 % i == 0) {
    lcmGcdArr.push(i);
  }
  i++;
}
console.log(lcmGcdArr);
