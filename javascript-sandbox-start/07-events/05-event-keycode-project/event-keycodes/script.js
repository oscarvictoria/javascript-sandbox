// Get all the elements 
const key = document.querySelectorAll('.key'); 



// Declare const of event 
const keyClicked = document.querySelector('body');

// Get the key clicked 

function getKey(e) {
    key.forEach( function(key, index){

    if (index === 0) {
        key.innerHTML = `<div class="key">
        ${e.key}
        <small>e.key</small>
      </div>`
    } else if (index === 1) {
        key.innerHTML = `<div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
      </div>`
    } else if (index === 2) {
        key.innerHTML = `<div class="key">
        ${e.code}
        <small>event.code</small>
      </div>`
    }
        
    })
       
}

keyClicked.addEventListener('keypress', getKey)















