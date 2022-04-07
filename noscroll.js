const menùtoggle = document.querySelector('.menù-toggle');
const menu = document.querySelector('.menu');
const body = document.getElementsByTagName("body")[0];
        
menùtoggle.onclick = function()
{ 
    body.classList.toggle('noscroll');
    menu.classList.toggle('barraaperta');
}