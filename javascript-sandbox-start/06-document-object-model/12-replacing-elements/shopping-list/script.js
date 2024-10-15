// Replace elemnts with replacewith()

let apples = document.querySelector('li:nth-child(1)');

let newItem = document.createElement('li'); 
// newItem.appendChild(document.createTextNode('Grapes'));
newItem.textContent = 'Paper'



let button = document.createElement('button')

button.className = 'remove-item btn-link text-red' 


let icon = document.createElement('i'); 
icon.className = 'fa-solid fa-xmark';

button.appendChild(icon);
newItem.appendChild(button)








apples.replaceWith(newItem);
