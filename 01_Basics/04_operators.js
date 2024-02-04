//*******************Arithmatic*********************
console.log(3+3)
console.log(3-3)
console.log(3*3)
console.log(3/3)
console.log(3%3)
console.log(3**3)

//concatenation
console.log("Namaste" + "World")
let str1 = "Hello"
str1 += "World"
console.log(str1)

//mix data type (although should be avoided)
//HERE, implicit conversion(coercion) will take place
console.log("5" + 5)    //here 5 will coerced as "5"
console.log(5 + "5")
console.log("5" + "5")
//Tricky, concept of associativity
console.log(4 + 5 + "4")
console.log(4 + "5" + 4)

console.log(+true, -true) // here true =>1 and unary + will be +1 and similarily -true => -1


//************************Comparision operator**************
console.log("Comparision")
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);   //here "2" will be coerced as 2
// console.log("02" > 1);

/*
Equality operator and other comparision operator work differently
so, with == operator null => NaN
and, with > operator(or other comparision operator) null => 0

*/
console.log(null > 0);
console.log(null == 0);         //NaN == 0 => False
console.log(null >= 0);         //0 >= 0 => True

//undefined will always be coerced as NaN, so not exception here
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict equality)

console.log("2" === 2);


//**********************Logical Operators*********************
console.log("Logical")
console.log(true && true)
console.log(true || false)
console.log(!true)
