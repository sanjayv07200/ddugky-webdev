/*Question 3: Clear Timeout
Create a setTimeout that logs "This should not appear" after 3 seconds,
 but cancel it using clearTimeout() before it runs.*/
function cancelTimeout() {
  const id = setTimeout(function () {
    console.log("This should not appear");
  }, 3000);
  clearTimeout(id);
}

cancelTimeout();
