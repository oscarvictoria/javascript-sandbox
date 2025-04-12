let button = document.querySelector('button'); 
let text = document.querySelector('p'); 
let list = document.querySelector('ul'); 

function buttonClicked() {
    text.classList.add('dark'); 
}

button.onclick = buttonClicked; 