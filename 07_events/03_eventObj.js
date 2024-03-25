/*
    Event Object ;-object sent to call back function
    it contains multiple things like browser or environment properties eg. x,y coordinates
    //type, timestamp, preventdefault
    //target,toElement,srcElement,currentTarget,
    //clientX, clientY, screenX, screenY
    //altKey,ctrlKey

*/
//preventDefault
document.getElementById("google").addEventListener("click", (e) => {
    // for (let i = 0; i < 100000; i++)
    // console.log(i);
    console.log("Prevent Default");
    // document.body.style.backgroundColor = "olive";
    e.preventDefault();
    console.log(e.type)
    console.log(e.timeStamp);
})

/*
timeStamp  -- returns the time (in milliseconds) at which the event was created.
              or can say that its time relative to your application first run in millisecond
type       -- tells the type of the event same as type we are listening for
*/


// document.querySelector("#images").addEventListener("click",(e)=>{
//     console.log(e.target, e.srcElement);
//     console.log(e.currentTarget);
//     // console.log(this);
// })

/*
    target -- it gives the element from which the event was fired
    currentTarget -- it is the element where listener is and listening for that event, event reaches here by propogation
    srcElement -- depracated just an alias of target
*/

document.querySelector("html").addEventListener("click",function(e){
    console.log(`client x = ${e.clientX} --  screen x = ${e.screenX}\nclient y = ${e.clientY} -- screen y = ${e.screenY}`);
})