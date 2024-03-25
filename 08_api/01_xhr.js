let username;
let xhr = new XMLHttpRequest()
let url;
let data;


document.querySelector("#getBtn").addEventListener("click",()=>{
    username = document.querySelector("#inputTxt").value;
    url = `https://api.github.com/users/${username}`
    xhr.open("get",url);
    xhr.send();
})


// console.log(xhr.readyState);
// console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState==4)
    {
        data = JSON.parse(this.responseText)
        // console.log(data.name);
        display(data.name,data.avatar_url)
    }
}

function display(name,imageUrl)
{
    let div = document.querySelector("#card");
    div.querySelector("h3").textContent = name;
    div.querySelector("img").setAttribute("src",imageUrl);
}
