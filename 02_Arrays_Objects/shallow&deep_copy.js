let objArr = [
    {
        roll : 100,
        name : "arjun",
        class : "MCA"
    },
    {
        roll : 101,
        name : "rohan",
        class : "BCA"
    },   
    {
        roll : 102,
        name : "Bhojan",
        class : "BBA"
    },
    {
        roll : 103,
        name : "Sojan",
        class : "MBA"
    }
]

let arr = [1,2,3,4,5];
let obj = {
    roll : 104,
    name : "chetan",
    class : "BCA",
    address: {
        city: "chandigarh",
        country: "india",
    }
};
/*
//reference copy
let temp = obj;
//shallow copy
let tempObj = {...obj};
//deep copy
let tempDeep = JSON.parse(JSON.stringify(obj));
tempDeep.address.city = "jajk";

// tempObj.name = "sudo_Arjun";
console.table([obj,temp]);
console.table([obj,tempObj,tempDeep]);
*/

// let temp = arr;
// let tempArr = [...arr];
// temp[0] = 100;
// tempArr[1] = 200;
// console.table([arr,temp]);
// console.table([arr,tempArr]);


// obj.forEach( (element)=> {
//     roll +=100;
//     console.log(element);
// })

// let strObj = new String("string Object");
// let str = "string prim.";

// let temp = str;
// let tempObj = strObj;
// temp = "changed string";
// tempObj = "changed object string";
// console.table([str,temp]);
// console.log(strObj,tempObj);

/*
   1. Assignment/Initialisation of value to variable/constant
        primitive -> actual copy of data
        non-primitive(like object, function) -> only reference to that object or function (REFERENCE COPY)
        * In case of string or number Object, they will behave just as primitive data 
          because these data types are based on object for adding extra functionalities like methods but considered as primitive to avoid any sort of confusion between simple primitive (that with object wrapper) or simple string object.
    2. Object copy
        Basically of two types :- shallow and deep, although there is also lazy copy(initial shallow copy and then when required it becomes deep copy when we will change the data)
        Shallow copy -> A new object is created where all the top level properties are copied and deeper one are just copied with their reference.
                    eg. slice(), concat(), spread operator, Object.assign()
        Deep copy -> A new object is created with same actual data as in other object which are totally independent of each other.
                    eg. JSON.parse(JSON.stringify(originalArray))
        https://en.wikipedia.org/wiki/Object_copying
        chat_gpt - "Shallow Copy: Shallow copying creates a new data structure and copies all the top-level properties of the original data structure to the new one. However, if the properties of the original data structure are themselves references (e.g., objects or arrays), only the references to those properties are copied, not the properties themselves."
        https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
        https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy


*/