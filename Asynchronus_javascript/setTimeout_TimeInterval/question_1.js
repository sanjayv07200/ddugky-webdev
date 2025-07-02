/*Question 1: Delayed Greeting
Write a function delayedGreeting() that prints "Hello after 2 seconds" after 2 seconds.*/
function delayedGreeting() {
  setTimeout(function () {
    console.log("hello! Good Morning");
  }, 2000);
}
delayedGreeting();
