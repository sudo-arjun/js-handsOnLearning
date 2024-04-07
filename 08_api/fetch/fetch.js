// let fetchReturn;
// async function fun(){

//     fetchReturn = fetch(`https://api.github.com/users/sudo-arjun`)
    
//     console.log(fetchReturn);
// }
// .then((res)=>{
//   console.log(res);  
// })



// async function fun(){
//     value1 = await new Promise((res)=>{
//         setTimeout(()=>res(5),1000);
//     })
//     console.log(`Value 1 : ${value1}, ${Date.now()/1000}`);
//     value2 = await new Promise((res)=>{
//         setTimeout(()=>res(5),1000);
//     })
//     console.log(`Value 2 : ${value2}, ${Date.now()/1000}`);
//     // console.log(value1,value1);
//     console.log(`End of fun.`)
// }
// fun();




// new Promise((res,rej)=>{
//     // res('{"name" : "Chetan Prakash"}')
//     fetch(`https://api.github.com/users/sudo-arjun`)
//     .then((data)=>{
//         // console.log(data,'\n','------------------------');
//         res(data.json())
//     })
// })
// .then((strData)=>{
//     let body = strData.json();
//     console.log(body)
//     return body;

// })
// .then((data)=>{
//     console.log(data);
// })




// const fetchAPI = async function(country1,country2,country3){
//     try{
//         let res1 = fetch(`https://restcountries.com/v3.1/name/${country1}`)
//         let start = Date.now();
//         let res2 = fetch(`https://restcountries.com/v3.1/name/${country2}`)
//         // console.log(Date.now()/1000);
//         let res3 = fetch(`https://restcountries.com/v3.1/name/${country3}`)
//         // console.log(Date.now()/1000);
        
//         res1 = await res1;
//         res2 = await res2;
//         res3 = await res3;
//         // console.log(Date.now()/1000);
//         const data1 = await res1.json()
//         const data2 = await res2.json()
//         const data3 = await res3.json()
//         // console.log(Date.now()/1000);
//         // console.log(data1);
//         console.log(data1[0].capital[0]);
//         console.log(data2[0].capital[0]);
//         console.log(data3[0].capital[0]);
//         let end = Date.now();
//         console.log(end-start);
//         return "Done with fetchAPI"
//     } catch(err){
//         console.log(err);
//         // throw new Error("Custom Error")s
//     }
// }
// fetchAPI("canada", "germany", "russia")

async function run(){
    let promise1 = fetch(`https://api.github.com/users/sudo-arjun`);
    let promise2 = fetch(`https://api.github.com/users/heyoparas`);
    let promise  = Promise.race([promise1,promise2]);
    console.log(promise);
    promise.then((data)=>{
        console.log(promise);
        console.log(data);
    })
}
run()
/*
    Static methods of Promise
    1. Promise.resolve()    --Returns a Promise object that is resolved with the given value.
    2. Promise.reject()     --Returns a new Promise object that is rejected with the given reason.
    3. Promise.all()        --To execute all promise parallely
        Returns new promise,state:- fulfilled if all promises given are fulfilled 
                                        else rejected state
                            Result:- array of result of all given promises

    4. Promise.any()        --Executes(resolves) any promise which is fastest
        Returns new promise,state:- fulfilled if any promises given is fulfilled 
                                        else rejected state if all promises given have rejected state
                            Result:- result of resolved promises or error if state is rejected

    5. Promise.race()       --Returns any settled promise which is fastest
        Returns new promise,state:- fulfilled/Rejected based on first settled promise 
                            Result:- result of settled promise
                            
    6. Promise.allSettled() --Return all settled promises as a result in its promise
        Returns new promise,state:- fullfilled, rejected only if some errors occure
                            Result:- array of settled versions of given promises

    All of above methods return new promise.
    .allSettled() also return give promise settled version in its promise result.
*/