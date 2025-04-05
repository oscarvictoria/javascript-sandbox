let output; 

let parent = document.querySelector('.parent')

// Get the children 

let children = parent.children; 
console.log(children[0].innerText)

// Get parent from child element
let child = document.querySelector('.child'); 

output = child; 

output = child.parentElement; 


// Get the next element by using getNextElementSibling property 

let secondElement = children[1]; 

let thirdElement = secondElement.nextElementSibling.innerText;

let firstItem = secondElement.previousElementSibling.innerText; 

output = firstItem; 

console.log(output); 

