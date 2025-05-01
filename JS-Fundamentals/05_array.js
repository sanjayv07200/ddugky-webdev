//array
// array is data structure which is used for store similar type of data and creation and allocation ,contiguous memory alloction

let arr = [8, 6, 9, 0, 7, 4];

// some method of the array
// at();
// Push();
// Pop();
// shift();
// unshift();
// slice();
// splice();
// include();
// indexof();

// at() method take index as input and return value at that index
// console.log(arr.at(2)); // 9
// console.log(arr[2]);

//push() method insert an element into the end of an array
// this method modify or effect to the original array
// arr.push(23);
// console.log(arr);

// pop() method remove the last element of  an array this method also
// effect on the original array
// console.log(arr);
// let popelement = arr.pop();
// console.log(popelement);
// console.log(arr);

// shift() method remove element from the begining of an array
// this method also effect on the originial array
// let r = arr.shift();
// console.log(r);
// console.log(arr);

//unshift() method insert an element into the beginging of an array
// let t = arr.unshift(100);
// console.log(t)
// console.log(arr);

// slice() method create a shallow copy of an array
// slice(startindex , endindex)
// its not affect on the original array
// let array = [
//   "sanjay",
//   "mahesh",
//   "rahul",
//   "ajay",
//   "hemant",
//   "aayushi",
//   "anjali",
// ];
// let ans = array.slice(2, 4);
// console.log(ans);
// console.log(array);

// include() method is return true if the specific element exist in an array
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.includes(5));

//indexof() method take value as the input and return the index of element if exist
//otherwise return -1
// arr1 = [1, 3, 5, 7, 8, 9];
// console.log(arr1.indexOf(9));
