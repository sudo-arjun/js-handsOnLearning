let loop = null;
document.getElementById('start').addEventListener('click', () => {
    document.body.style.backgroundColor = generateRGB();
    if(loop==null){
        loop = setInterval(() => {
            document.body.style.backgroundColor = generateRGB();
        }, 2000)
    }
})
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(loop);
    loop = null;
})

function generateRGB(){
    let red,green,blue,alpha;
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    alpha = Math.random();
    return `rgb(${red},${green},${blue},${alpha})`
}
