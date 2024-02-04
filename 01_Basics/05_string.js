//Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
let str1 = "Simple string";
let strTemplateLiteral = `String using temple literal can have variable in it directly ${str1}`
let str2 = String("Second way to create string");
let str3 = new String("Third way using new");

// console.table([[str1,typeof str1],[strTemplateLiteral,typeof strTemplateLiteral],[str2,typeof str2], [str3,typeof str3]])

//Eg. why string primitive and object are not same
console.log(str1.indexOf('s'))
let a ='a'
let b = new String('a')
console.log(a===b)

let expPrim = "5+5"
let expObj = new String("5+5")
console.log(`Evaluation of expPrim:${eval(expPrim)}\nEvaluation of expObj:${expObj}`)
//Although expObj can be converted to primitive string using .valueOf() method

/*
Summary:
String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. 
In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead.

String primitive and object are different but act almost same in js due to its working nature. We can only find some areas where this difference is visible as shown in above eg.
https://developer.mozilla.org/en-6US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects
*/

let str = "hello, my name is chetan"
console.log(str.__proto__)
console.log(str.length)
console.log(str.charAt(4))
console.log(str[5])
console.log(str.indexOf('my'))
console.log(str.substring(10,14))
console.log(str.slice(-6))          //better then substring as negative position can be given
console.log(str.replace('hello','namaste'))
console.log(str.includes('hello',10))
console.log(str.split(' '))
//All these methods don't change the actual string, as string(primitive data type) is based on stack not heap
console.log(str)

