// setTimeout(()=>{
//     console.log("I am setTimeout");
//     resolve();
// },2000)
// function resolve()
// {
//     console.log("Called resolve");
// }

let obj = {
    name : "apple"
}
setTimeout(()=>{
    console.log("in timeout");
},0)
for(let i= 0;i<400;i++)
console.log(obj);
obj.price = 120;

console.log(obj);