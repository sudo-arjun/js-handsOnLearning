//Data
let data = "Hello my name is Chetan Prakash";

//Inject data in p element
const p = document.querySelector(".text");
p.appendChild(document.createTextNode(data));

//Get key Input
const controller = new AbortController();
const input = document.querySelector(".textInput");
input.addEventListener("keypress",(e)=>{
    console.log('key',e.key);
    checkKey(e.key);
},{signal:controller.signal})

let currentIndex = 0;
function checkKey(key)
{
    
    if(data[currentIndex]==key)
    {
        //print in green
        input.appendChild(createSpan(key,"green"));
    }
    else 
    {
        //print in red
        input.appendChild(createSpan(key,"red"));

    }
    currentIndex++;
    if(currentIndex >= data.length)
    gameOver();
}

function gameOver(){
    controller.abort();
}


function createSpan(key, color)
{
    let span = document.createElement("span");
    span.setAttribute("class",color);
    span.innerText = key;
    return span;
}