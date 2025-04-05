let output;

const parent = document.querySelector('.parent'); 

output = parent.childNodes; 

output = parent.childNodes[0]; // Space 
output = parent.childNodes[1]; // Comment 
output = parent.childNodes[2]; // Space 
output = parent.childNodes[3];  // First Node 

let textNode = parent.childNodes[1]; 

output = textNode.textContent;

let firstChild = parent.childNodes[3]; 

output = firstChild.textContent;

firstChild.style.color = 'red';

output = parent.childNodes; 


console.log(output); 