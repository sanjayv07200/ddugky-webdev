// reverse the number's digit
num = 2345;
result = 0;
while(num > 0 ){
  let digit  = num % 10 ;
  result = result * 10 +digit;
  num = Math.floor(num/10);

  
} 
console.log(result)
