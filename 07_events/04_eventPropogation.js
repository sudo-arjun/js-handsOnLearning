//Event Propogation
//event bubbling - event travels from bottom to top level in DOM
document.querySelector("#owl").addEventListener("click", (e) => {
    console.log("owl clicked");
    e.stopPropagation();    //Will stop propogation to its parent
});
document.querySelector("#images").addEventListener("click", (e) => {
    console.log("images clicked - parent node for owl");
}, false);

//event capturing - event travels from top to bottom in DOM
// document.querySelector("#owl").addEventListener("click",(e)=>{
//     console.log("owl clicked");
// },true);
// document.querySelector("#images").addEventListener("click",(e)=>{
//     console.log("images clicked - parent node for owl");
// },true);


/*
    In case if you apply both propogation to parent and child
    Then in that case sequence of execution will be -
    1. Event capture of parent
    2. Event capture of child
    3. bubbling - child
    4. bubbling - parent

*/