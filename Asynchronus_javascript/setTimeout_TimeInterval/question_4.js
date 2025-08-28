/*Question 4: Countdown Timer
Write a function countdown(n) that logs numbers from n 
down to 1 every second, then prints "Go!".*/

function countdown(n) {
  const id = setInterval(function () {
    count = 1;
    if (count < n) console.log("Go!");
    clearInterval(id);
  }, 1000);
}
countdown(5);
