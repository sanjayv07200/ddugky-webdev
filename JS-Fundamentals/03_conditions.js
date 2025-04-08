 /*var number = 90;
if (number>=33){
    if (number>=80){
        console.log("you got distinct.")
    }
    else{
        console.log("you passed.")
    }
}
else{
    console.log(" you failed. need to study more.")
}
*/

/*var number = 23;
 if(number == 0){
    console.log("number is zero.");
}else if(number >= 0){
    console.log(" number is a positive number. ");
 }
 else{
    console.log("number is a negative number.")
 }*/

var marks =5;
var Grade;
var conditionO = marks >=90;
var conditionG = marks >=80 && marks < 90;
var conditionA = marks >=70 && marks < 80;
var conditionB = marks >=50 && marks < 70
var conditionF = marks <=30

if (conditionO)(console.log("your grade is :",Grade="O"));
else if(conditionG)(console.log( "your grade is : ",Grade="G"));
else if(conditionA)(console.log("your grade is : ",Grade="A"));
else if(conditionB)(console.log("your grade is : ",Grade="B"));
else if(conditionF)(console.log("your grade is : ",Grade ="f"));