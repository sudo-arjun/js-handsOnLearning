/*
Event :- 
Ways to apply event on element
1. directly injecting in html //(inline event handlers)
    eg. onclick = "alert()"  //Worst way
2. element.onclick = function(){}   //event handler properties
    here, element is selected using js
    element has inbuilt property of onClick to which we can assign a function.
    Problem - only one function can be attached to a particular property
3. addEventListener("click", ()=>{},false)
    1st argument - "click" type of event    https://developer.mozilla.org/en-US/docs/Web/Events
    2nd argument - any call back function   
    3rd argument - true/false, about event propogation  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
         here true -> event capturing
            false -> event bubbling
4. Other obsolete or less used ways
    attachEvent - for internet Explorer
    on - in JQuery
*/

let psElement = document.getElementById('photoshop');
// psElement.onclick = () => alert("Ps image clicked using onClick property");
psElement.addEventListener('click', (e) => {
    console.log(e);
    // alert("hi");
});

/*
    Event Object ;-object sent to call back function
    it contains multiple things like browser or environment properties eg. x,y coordinates
*/

//event listener inside event listener
//event is registered only after the outer eventListener is executed. 
//Then, if it falls in propogation of the same event, it will be executed through same event
//but if it doesn't then it will be called when new event is fired.
document.querySelector("#japan").addEventListener("click", (e) => {
    console.log("Japan image clicked");
    document.querySelector("#japan").parentElement.addEventListener("click", (e) => {
        console.log("Japan image clicked inside");

    },true)
},true)


/*

Key Terminologies:-
    1, event = any action that happens and can generate a signal
    2. eventTarget = any object that can be the target of an event in DOM
        eventTarget.addEventListener()
        simply put, any object that can receive events and has methods for managing event listeners
    3. event listener = The listener listens out for the event happening
    4. event handler = block of code which actually runs when event is fired
        When such a block of code is defined to run in response to an event, we say we are registering an event handle
        
*/