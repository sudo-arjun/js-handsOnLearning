// Methods:- forEach, filter, map, reduce

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


//forEach -> Used to traverse to each element
/*Working :- it will work on array
            1. It will traverse to each array element one by one
            2. Then, send each element as argument to the callback function
               so, it will use function argument rules that if data is non-prim then it's reference will be sent in argument and vice versa
            3. After traversing it won't return anything so undefined.
*/
let resultOfForEach = objArr.forEach( (element,index,arr)=>{
    // element = 0;  -- won't work because element has reference of arr[0], we just overwriting over this variable not changing the value at address
    // console.log(index,element,arr);
});
// console.log(`Result of forEach: ${resultOfForEach}, ${objArr}`);


//filter -> Used to select element from the array
/*
            1. Just simply requires boolean output from the callback function 
                based on which it returns the element of array.
*/
let resultFilter = arr.filter( (element,index,a)=>{
    //expect true/false as return value
    return element>3;
})
// console.log(`Result of filter: ${resultFilter}\nActual Array ${arr}`)


//map -> Use to form new array based on the elements of original array
let resultMap = arr.map( (element,i,a)=>{

    return element**2;
})
// console.log(`Result of Map: ${resultMap}\nActual Array ${arr}`)


/*
    reduce -> Applies a function against an accumulator and 
    each element in the array (from left to right) to reduce it to a single value.
*/
let resultReduce = arr.reduce((acc,element,index,arr)=>{
    //product of all arr elements using acc
    // acc *= element;
    // return acc;
    return acc*element;
},1)
console.log(`Result of Reduce: ${resultReduce}\nActual Array ${arr}`)
