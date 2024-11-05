// Get all the elements 
const key = document.querySelectorAll('.key'); 

let letter = ''

// Declare const of event 
const keyClicked = document.querySelector('body');

// Get the key clicked 


keyClicked.addEventListener('keypress', getKey)

key.forEach(function(key) {
    // Hard code

    key.textContent = letter
   
    

})

function getKey(e) {
    letter = e.key; 
    console.log(letter)
    
}












