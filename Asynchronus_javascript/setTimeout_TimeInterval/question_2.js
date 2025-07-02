/*Question 2: Repeating Counter
Write a function startCounter() that logs numbers from 1 to 5, with a 
1-second gap between each number using setInterval.*/

function startCounter(n) {
  const id = setInterval(function () {
    let count = 0;
    if (count < n) console.log(count);
    clearInterval(id);
  }, 1000);
}
startCounter(5);
