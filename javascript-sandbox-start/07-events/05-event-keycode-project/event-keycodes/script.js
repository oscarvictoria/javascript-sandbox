// Get all the elements 
const key = document.querySelectorAll('.key'); 



// Declare const of event 
const keyClicked = document.querySelector('body');

// Get the key clicked 

function getKey(e) {
    key.forEach( function(key){
        key.innerHTML = e.key; 
        
    })
    
 
    
}

keyClicked.addEventListener('keypress', getKey)















