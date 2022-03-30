const menùtoggle = document.querySelector('.menù-toggle');
const menu = document.querySelector('.menu');
const body = document.getElementsByTagName("body")[0];
        
menùtoggle.onclick = function()
{ 
    menu.classList.toggle('barraaperta');
    body.classList.toggle('noscroll');
}