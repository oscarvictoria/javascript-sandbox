let button = document.querySelector('button'); 
let text = document.querySelector('p'); 
let list = document.querySelector('ul'); 

function buttonClicked() {
    text.classList.add('dark'); // Adds a class
}

button.onclick = buttonClicked; 