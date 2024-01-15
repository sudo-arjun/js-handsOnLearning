/*
In js, array is just collection of items or data pieces which can be of any type stored linearly
JavaScript arrays are resizable and can contain a mix of different data types.
*/
let arr1 = [1, 2, 3];
let arr2 = [100, "chetan", true];
let arr3 = Array(100, 6, 8);
let arr4 = new Array("hjk", 56, "qwerty");
// console.log(arr4)

// 01!=1 in arr index because these index are properties of array object and 01 points to different property.(Each index is coerced into string)
// console.log(arr1["01"], arr1["1"]);

//if you want to create array with predefined length
let arr_with_length = new Array(5); //array of 5 length
//Keep in mind it won't make [5] as array but rather empty array with length 5
//To create array as [5] use array literal
let arr_single_element = [5];

//Array Methods --does change the actual data(heap)
let avengers = ["ironman", "spiderman", "thor", "captainamerica"];

avengers.push("hulk");
avengers.pop();
avengers.unshift("BlackWidow"); //inserts at left most place
avengers.shift(); //shift the array right to left, thus removing left most element
// console.log(avengers.indexOf("thor"));
// console.log(avengers.includes("thor")); //check if exists in array
let newArr = avengers.join(" "); //array -> string
// console.log(newArr);
let arr_slice = avengers.slice(1,3);//extracts/copy the data from array -- end not included
// console.log(avengers,arr_slice);
let arr_splice = avengers.splice(1,3);//moves the data from array -- end included
// console.log(avengers,arr_splice);

//Merging two array
//best way is to use spread operator
let cars = ["swift","harrier","safari","scorpio"]
let bike = ["apache","pulsar","bullet"]
let vehicleUsingSpread = [...cars,...bike]
console.log(vehicleUsingSpread)

//Other ways 
//concate method
let vehicleUsingConcat = cars.concat(bike)
console.log(vehicleUsingConcat)

//To flat out the array, means remove any 2d or 3d array and have its only elements in same dimension
let mix_arr = [1,2,3,[4,5,[6,7]]];
let plain_arr = mix_arr.flat(Infinity)

//Array.isArray
console.log(Array.isArray("hello"))

//Array.of and Array.from
/*Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 */
let arr_of = Array.of(2,4,3);//create array from given value
let arr_from = Array.from("chetan")
console.log(arr_of,arr_from)
console.log(Array.from({name: "hitesh"})) // interesting
