/*const Person = function (name, age) {
  this.fname = name;
  this.age = age;
  greet = function () {
    console.log(`Hello, my name is ${this.fname}`);
  };
};

const person01 = new Person("fagan parte", 22);
console.log(person01);

// 2
const Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

Car.prototype.getdetails = function () {
  return `${this.model} ${this.make} ${this.year}`;
};

const car01 = new Car("234xys", "mahindra", 2013);
console.log(car01.getdetails());

// 3
const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rectangle01 = new Rectangle(20, 12);
const rectangle02 = new Rectangle(40, 10);
console.log(rectangle01.getArea(), rectangle02.getArea());

/* if we create method inside the constructor then we create many object, the work of method'll same  for every object 
 which is create constructor more heavy and complex and if we create method inside the prototye then it can be use every object who needs ;
 conclusion:- the work of method inside constructor and inside the prototype are same 
 but method inside prototype make constructor lightweight;*/

const Abc = function (id, name) {
  this.A = id;
  this.B = name;
  this.sleep = function () {
    console.log(`${this.B} is sleeping`);
  };
};
Abc.prototype.read = function () {
  console.log(`${this.B} is reading`);
};

const x = new Abc(1, "aman");
const x2 = new Abc(3, "azim");

console.log(x, x2);
x.sleep();
x2.sleep();

x.read();
x2.read();
/* here two method of the Abc, one inside the constructor and another one is
inside the prototype of Abc both are doing same type of work but method which is
inside the constructor is make consturctor too heavy and prototype method make it
lightweight */

// object question
const student = {
  fname: "Ajay",
  age: 21,
  courses: ["AI-ML", "CSE"],
  introduce: function () {
    console.log(
      "I am ",
      this.fname,
      "enrolled in ",
      this.courses.length,
      "courses"
    );
  },
};
student.introduce();

//prototype question no:- 4
const BankAccount = function (owner, balance) {
  this.owner = owner;
  this.balance = balance;
};

BankAccount.prototype.deposit = function (amount) {
  return this.balance + amount;
};

BankAccount.prototype.withdraw = function (amount) {
  return this.balance - amount;
};

BankAccount.prototype.getBalance = function () {
  return this.balance;
};
