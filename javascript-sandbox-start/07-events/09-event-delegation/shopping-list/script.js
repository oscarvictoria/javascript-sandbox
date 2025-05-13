const button = document.querySelector('.btn'); 
const div = document.querySelector('form div:nth-child(2)'); 

function buttonClicked(e) {
    e.stopPropagation()
    alert('button clicked')
    
}

function divClicked(e) {
     alert('div clicked')
    
}

button.addEventListener('click', buttonClicked); 

div.addEventListener('click', divClicked); 


// When we have a parent using an event listener the parent event also get's called when the child element is clicked

// To avoid this, we can add the e.stopPropagation method on the event of the chosen child element 



