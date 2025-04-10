// // print all the even number between 1 to 50
// let num = 1;
// let count= 0;

// while(num<=50){
//     if(num%2==0) {console.log(num); count++}
//     num++; 
// }

// console.log("Count : ", count);
 
// // print the square of digit from 1 to 10
// num = 1;
// while(num<=10){
//     console.log(num,"*",num,"=",num*num);
//     num++;
// }

//print the count of the number 
 num = 56789;
 count = 0;
while(num > 0){
    let digit = num % 10;
    console.log(digit);
    count++;
    num = Math.floor(num/10);
}
console.log("count :",count)
