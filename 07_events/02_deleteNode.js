let ul = document.querySelector('ul');
ul.addEventListener('click',(e)=>{
    // console.log(e.target.parentElement);
    // console.log(e.currentTarget);
    // console.log(e.srcElement);
    if(e.target.tagName === 'IMG')
    ul.removeChild(e.target.parentNode);
    // e.target.parentNode.remove();
})