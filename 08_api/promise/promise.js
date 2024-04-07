// let sum, date = new Date("1970-01-01T05:30:00.000" );
// console.log("Start time",date.getTime().toLocaleString());

let promise1 = new Promise(function(res,rej){
    // return "ok"
    // console.log(sum,"in promise 1");
    // setTimeout(()=>{
    //     console.log("promise 1 timeout",Date.now())
    //     res();
    // },1000)
    setTimeout(()=>{
        console.log("PROMISE")
    res("done");

    },0)
})
setTimeout(()=>{
    console.log("returnValue,returnThenValue,final")
},0)
// let promise2 = new Promise((resolve, reject)=>{
//     console.log("I am in promise 2");
//     setTimeout(()=>{
//         console.log("promise 2 timeout",Date.now())
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Then of promise 2");
// })
// // console.log(promise1)

let returnValue = promise1.catch((abc)=>{
    console.log("promise1 rejected")
}).then(()=>{
    console.log("Catch - then chain promise 1 consumed")
})
let returnThenValue = promise1.then((err)=>{
    console.log("Then of promises 1");
})
// let final = promise1.finally(()=>{
//     console.log(1/0);
//     throw err;
// })



// .then(()=>{
//     console.log("Then of promises 1");
// })
// //vs
// promise1.then((err)=>{
//     console.log("Then of promises 1");
// }).catch(()=>{
//     console.log("promise1 rejected")
// })
// //vs
// promise1.then((err)=>{
//     console.log("Then of promises 1");
// })
// promise1.catch(()=>{
//     console.log("promise1 rejected")
// })
