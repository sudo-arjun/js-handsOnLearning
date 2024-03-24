/* PRACTISE
//add button using dom manipulation
let button = document.createElement("button");
button.innerHTML = '<img width="100px" src="https://img.freepik.com/free-psd/button-isolated-transparent-background_191095-11118.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=sph">';
document.body.appendChild(button);

//create a div of weekday list
function createElementWithText(elementType,text)
{
    let element = document.createElement(elementType);
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}
let div = document.createElement('div');
let h2 = createElementWithText('h2','Weekdays in nihongo: ');
div.appendChild(h2);
let ol = document.createElement('ol');
ol.appendChild(createElementWithText('li','getsuyoubi'));
ol.appendChild(createElementWithText('li','kayoubi'));
ol.appendChild(createElementWithText('li','suiyoubi'));
ol.appendChild(createElementWithText('li','mokuyoubi'));
ol.appendChild(createElementWithText('li','kinyoubi'));
ol.appendChild(createElementWithText('li','doyoubi'));
ol.appendChild(createElementWithText('li','nichiyoubi'));
div.appendChild(ol);
/*
ol.appendChild(li.cloneNode(false)
                 .appendChild(document.createTextNode("kayoubi"))
                 .parentElement);

//won't work as li is referring to same element
li.appendChild(document.createTextNode("suiyoubi"));
ol.appendChild(li);
*/


// //add some styling to div
// div.style.backgroundColor = "green";
// div.style.borderRadius = "15px"
// div.style.padding = "5px"

// let divState = false;
// button.addEventListener("click", (event) => {
//     if(divState == false)
//         document.body.appendChild(div);
//     else
//         document.body.removeChild(div);
//     divState = !divState;
// })

// button.click();


const textBox = document.querySelector('#txtBox');
const startBtn = document.querySelector('#start');
const submitBtn = document.querySelector('#submit');
const prevInput = document.querySelector('.prevInput');
const display = document.querySelector('.display');
let gameRunning = false;
let life = 10;
startBtn.addEventListener("click",(e)=>{
    gameRunning = true;
    startBtn.style.display = "none";
    submitBtn.style.display = "inline";
})

submitBtn.addEventListener("click",(e)=>{
    // gameRunning = true;
    let input = parseInt(textBox.value);
    let randomNum = Math.round(Math.random()*100);
    console.log(`Random number: ${randomNum}`);
    life--;
    if(input == randomNum)
    {
        //You Won
        alert("You Won the match");
        gameRunning = false;
        reset();
    }
    else
    {
        let diff = randomNum - input;
        prevInput.appendChild(document.createTextNode(`${input}, `));
        // display.removeChild();
        // display.appendChild(document.createTextNode(`oh! just ${diff} difference`));
        display.innerText = `oh! just ${diff} difference\nLifes:${life}`;
    }
    if(life == 0)
    {
        gameRunning = false;
        reset();
    }
   
})

function reset()
{
    display.innerHTML = ``;
    prevInput.innerHTML = ``;
    startBtn.style.display = "inline";
    submitBtn.style.display = "none";
    life =10;
}