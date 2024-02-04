"use strict" //treat all js code as newer version

//alert() will not work in nodejs env because this function uses html document which is available only when we do js via html page or console tab in brower

/*
//This is possible as \n(present at the end of statement) is taken as terminator but this practise is not recommended, the code must be proper indent
console.log(3+
    3
    ) 
console.log("ehlo")
*/


// *********************************Data Types***********************************
let num =5;  //64 bit float MAX SAFE VALUE UPTO 2^53
let str ="";
let bool = true;
let empty = null;
let unassigned;

// other two are bigint and symbol
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)


//type of
console.log(typeof(Number),typeof(num), typeof num, typeof(empty),typeof(unassigned))
//here, we can see NULL data type of is type object


let num1 = new Number(5);
let num2 = 5;
console.table([[num1,num2],[typeof num1,typeof num2]]);


