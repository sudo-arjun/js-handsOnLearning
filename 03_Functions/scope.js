// "use strict"

//Scope

let letGlobal = 1;
var varGlobal = 2;
const constGlobal = 3;
{
    //Inside a block
	let letInBlock = 10;
	var varInBlock = 20;
	const constInBlock = 30;

	function funInBlock() {
		console.log("in braces block");
		(function funInFunctionBlock() {
			console.log("Function in function block",constGlobal);
		})();
	    let arrowFunInBlock = ()=> console.log("Arrow function in block");
		let letInFunction = 100;
		const varInFunction = 200;
		const constInFunction = 300;
        funInFunctionBlock();
        // arrowFunInBlock();

	}
}
funInBlock();
// funInIfBlock();
// funInIfBlock2();
// if(1)
// {
//     if(1==0)
//     {
//         function funInIfBlock2()
//         {
//             console.log("Function in if block2");
//         }
//     }
// 	function funInIfBlock(){
// 		console.log("Function in if block");
// 	}
// }
//function in braces will work
// funInBlock();
// funInIfBlock();
// funInIfBlock2();
// arrowFunInBlock();
//Generates error as function is not defined
// funInFunctionBlock();
// console.log("Var in block ",varInBlock);
