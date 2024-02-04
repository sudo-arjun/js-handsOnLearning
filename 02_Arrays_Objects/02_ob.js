//object literal declaration
let car = {
    name:"Safari",
    price:3000000
}
// console.log(car);
let car_singleton = new Object();

//A object can have objects, array, functions(methods), data as its properties
//In object each key and value are stored in string unless if it's number, boolean or even symbol
let keySymbol = Symbol("key1");
let user = {
    fullName:{
        firstName:"Chetan",
        lastName:"Prakash"
    },
    email:"chetanprakash@gmail.com",
    phone:12345690,
    isLoggedIn:true,
    lastLoginDays:["Wednesday","Monday"],
    "address":"Chandigarh",          //same as address
    //to use symbol as a key
    [keySymbol]:"myKey1",
    //keys can be only string or symbol
    //In all these eg. the 1 is coerced as '1'
    1:5,
    "1":10,
    [1]:1,

}
// console.log(user)

//Accessing object
// console.log(user.fullName.firstName);
// console.log(user["fullName"]["lastName"]);  //Using bracket notaion, commonly used in arrays
// console.log(user[keySymbol])                //Accessing symbol key
console.log(user[1]);
console.log(user['1'])

user.greeting = function(){
    console.log(`Hello ${this.fullName.firstName}, How are you`);
}

console.log(user.greeting);
console.log(user.greeting());


//inbuilt Methods
//freeze
Object.freeze(user);
user.address="delhi";
// console.log(user);

//merge two objects

//best - spread operator
let user_big1 = {...user, ...car};
//assign
let user_big2 = Object.assign({},user,car);
// console.log(user_big1,user_big2);

//To fetch key or values from object to array
console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(user.hasOwnProperty("isLoggedIn"))


//Destructor
let course = {
    courseName:"BCA",
    duration:3,
    courseInstructor:"someone"
}

let {courseInstructor : inst} = course;
let {courseName} = course;
console.log(inst,courseName);