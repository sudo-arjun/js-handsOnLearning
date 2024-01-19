/*
1. What is procedure, function, method
2. default argument in function
3. rest operator -- for indefinite arguments
4. scope - global, functional, block
5. hoisting -- how it works in function defination/declaration but not in function expression
6. 4 types of function or ways to declare function - 
	1. function declaration, 
	2. function expression, 
	3. fat arrow function, 
	4. IIFE(immediately invoked function expression)
7. **** this pointer - used to refer to parent context

https://www.freecodecamp.org/news/javascript-function-iife-parameters-code-blocks-explained/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/

//eg.
function addTwoNumbers(number1 = 1, number2 = 2) {
	console.log(`Value of num1:${number1}\nValue of num2:${number2}`);
	console.log(number1 + number2);
	return number1;
}

//Reference to function
addTwoNumbers;
//Calling or executing the function using ()
//if argument is not send and parameter will be undefined
// addTwoNumbers(5, 6);


let letOut = 100;
var varOut = 200;
const constOut = 300;

{{
	let letInBlock = 1;
	var varInBlock = 2;
	const constInBlock = 3;

	function funInBlock() {
		// console.log("in braces block");
		(function funInFunctionBlock() {
			// console.log("Function in function block",constOut);
		})();
		let letInFunction = 10;
		const varInFunction = 11;
		const constInFunction = 12;

	}
}
}
funInBlock();
//Generates error as function is not defined
// funInFunctionBlock();

// console.log(varInBlock);



//having unknown no. of parameters - by using rest operator && IIFE concept
/*
(function nArgument(num1, num2, ...restOfNum){
	let a =console.log(num1,'\n',num2);
	console.log(a);
	restOfNum.forEach( (element)=> {console.log("element");});

})(1,2,3);
*/
//IIFE using fat arrow function
// ((...allNum)=>{allNum.forEach( (element)=>console.log(element))})(1,2,3,4,5,6,7);

//Function Expression

//console.log(square(5));	--Won't work in function expression
const square = function(num){
	return num*num;
}
console.log(square(5));