const form = document.getElementById('item-form');
const textInput = document.getElementById('item-input')
const selectInput = document.getElementById('priority-input')

const heading = document.querySelector('h1'); 



function getInput(e) {
    // e.preventDefault()
    console.log(e.target.value)
    heading.textContent = e.target.value;
}

textInput.addEventListener('input', getInput)