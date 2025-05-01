// find the hcf of the numbers
let num = 12;
let num2 = 5;
let pointer = 1;
let final_list = [];

while (pointer <= num && num2) {
  if (num % pointer == 0 && num2 % pointer == 0) {
    final_list.push(pointer);
  }
  pointer++;
}
console.log(final_list);
console.log(num, ",", num2, "=", final_list[final_list.length - 1]);
