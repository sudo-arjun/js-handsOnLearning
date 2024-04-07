let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("in promise1")
        res("promise1 success");
    }, 1000);
})
let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("in promise2")
        res("promise2 success");
    }, 1000);
})

// async function ok(){
//     let a = await promise1;
//     console.log(Date.now())
//     let b = await promise2;
//     console.log(Date.now())
//     console.log(a,b,"End of await");
// };
// ok();

promise1.then((a) => {
    console.log(Date.now());

    promise2.then((b) => {
        console.log(Date.now());
        console.log(a, b, "End of then");

    })
})