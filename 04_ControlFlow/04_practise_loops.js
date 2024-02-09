let car = {
    engine : 1200,
    name : "swift",
    price : 650000
}
let arr = [1,2,3,4];

//for_in loop  :- loop which iterates on properties of object using its keys

// for(let i in car)
// {
//     console.log(`${i} : \n ${car.i}`);
// }
// for(let key in arr)
// {
//     console.log(`${key} : ${arr[key]}`);
// }

//for_of loop  :- loop which iterates on the values of the iterables eg string, array
// for(let value of car)
// {
//     console.log(`${value}`);
// }

//methods
let i=0;
let resultOfforEach = arr.forEach((element) => {
    arr[i] = element * 2;
    console.log(element,arr[i++]);
});
console.log(resultOfforEach, arr);
