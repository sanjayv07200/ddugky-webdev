// find the hcf of the numbers
let num1 = 12;
let num2 = 24;
let pointer = 1;
let final_list = [];
let lcm;

while (pointer <= num1 && num2) {
  if (num1 && num2 % 2 == 0) {
    if (num1 % pointer == 0 && num2 % pointer == 0) {
      final_list.push(pointer);
    }
  } else {
    lcm = num1 * num2;
  }
  pointer++;
}

console.log(final_list);
console.log(lcm);
console.log("lcm:-", num1, num2, ":-", final_list[0]);
console.log("hcf:-", num1, ",", num2, "=", final_list[final_list.length - 1]);
