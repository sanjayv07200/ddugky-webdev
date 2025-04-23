// //ARITHMATIC OPERATOR
var num1 = 10;
var num2 = 2;
var res1 = num1 + num2; // 12
var res2 = num1 - num2; // 8
var res3 = num1 * num2; // 20
var res4 = num1 / num2; // 5
var res5 = num1 % num2; // 0
var res6 = num2 ** 2; // 4
console.log(Math.floor(num1 / 3));
console.log(res1, res2, res3, res4, res5, res6);

// // INCREMENT OPERATOR AND DECREMENT OPERATOR
var a = 10;
a++; // a = a + 1; = 11
a++; // a = a + 1; = 12
a--; // a = a - 1; = 11
console.log(a);

// //COMPARISION OPERATOR
var x = 23;
var y = 27;

console.log(x < y); // true
console.log(x > y); // false
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x == y); // false
console.log(x != y); // true

// USE OF ASSIGNMET OPERATOR
var A = 5;
console.log(A);
//assignment operator
A += 2; // after use of addition operator //
console.log(A); //7
A -= 1;
console.log(A);
//6
A *= 5;
console.log(A);
//30
A /= 3;
console.log(A);
//10
A %= 5;
console.log(A);
A **= 2;
console.log(A);

//LOGICAL OPERATOR
//AND (&&) OPERATOR
var age = 12;
if (age >= 18 && age <= 35) {
  console.log(" your welcome in ddugky family.");
} else {
  console.log("sorry! you can't join ddugky family.");
}

// //USE OF OR (||) OPERATOR
var adhar = "YES";
var sID = "";
if (adhar == "YES" || sID == "YES") {
  console.log("student can enter in the school.");
} else {
  console.log("don't allow");
}

// USE OF NOT(!) OPERATOR
var A = 12;
var B = 23;

console.log(A != B); // outcome false
console.log(A == B); // outcome true

// comparison operator
var A = 12;
var B = 23;

console.log(A == B); // false
console.log(A > B); // false
console.log(A < B); // true
console.log(A >= B); // false
console.log(A <= B); // true
console.log(A === B); // false
console.log(A != B); // true
console.log(A !== B); // true
