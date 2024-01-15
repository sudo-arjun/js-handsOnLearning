//variables, constants

/*
var - outdated way of declaring variable
Flaws:
1. Don't have concept of block scope
2. Can be used before declaration
3. Can be declared multiple times
*/
console.log(accountCity);
accountCity = "Chandigarh"
var accountCity = "Yamunanagar"
var accountCity = "delhi"

//let - best practise, newly added and is scope based, solves above three mentioned problems
let accountEmail="chetan@gmail.com"

//variable can also be declared without any keyword, worst practise
accountHolder = "arjun"

//Constant - value can't be changed after intialisation(it is must)
const accountId=100;

//Print
console.table([accountCity,accountEmail,accountHolder,accountId])
