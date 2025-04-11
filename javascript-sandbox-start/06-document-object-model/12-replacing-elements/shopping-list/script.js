// Replace elemnts with replacewith()

let apples = document.querySelector('li:nth-child(1)');


function replace(item, currentItem) {

let li = document.createElement('li'); 
// newItem.appendChild(document.createTextNode('Grapes'));
li.textContent = `${item}`



let button = document.createElement('button')

button.className = 'remove-item btn-link text-red' 


let icon = document.createElement('i'); 
icon.className = 'fa-solid fa-xmark';

button.appendChild(icon);
li.appendChild(button)

currentItem.replaceWith(li)

}


replace('Fruit', apples); 

function replaceFirstElement() {
    let firstItem = document.querySelector('li:nth-child(1)'); 
    let li = document.createElement('li'); 
    li.textContent = 'First Item'; 

    firstItem.replaceWith(li);
  
    
}

replaceFirstElement();








