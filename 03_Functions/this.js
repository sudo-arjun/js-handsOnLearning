/*
this pointer refers to the parent context
this pointer returns windows when run in browser in global context whereas empty oject when run in node env.
this pointer can work in fat arrow function but will only point to global scope whereas in normal function it will point to that function

*/
// let username= "abd"
const ob = {
    username:"chetan",
    fun: function()
    {
        console.log(this);
    }
}
// console.log(ob.fun())

//this pointer pointing to the global scope
console.log(this);