/*
1. if-elseif-else structure --just like c
2. switch  -- can use string or any other data type in case unlike c
3. ternary operator

New ones:-
4. Nullish Coalescing Operator ??

*/

//Conversions which is extensively used, although discussed in 01_Basics
/* falsy values
1. int -> 0,-0,NaN
2. string -> ""
3. bool -> false
4. null, undefined, 0n

truthy values, all other than falsy, some tricky one are:-
"0", 'false', " ", [], {}, function(){}
*/

//To check object if empty or not
let ob = {};
if(Object.keys(ob).length==0)
    console.log("Object is empty");

    
// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20