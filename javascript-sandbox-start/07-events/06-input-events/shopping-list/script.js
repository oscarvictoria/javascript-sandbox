const form = document.getElementById('item-form');
const textInput = document.getElementById('item-input')
const selectInput = document.getElementById('priority-input')
const checkInput = document.getElementById('checkbox')

const heading = document.querySelector('h1'); 




function getInput(e) {
    // e.preventDefault()
    console.log(e.target.value)
    heading.textContent = e.target.value;
}

function checkBox(e) {
    console.log(e.target.checked)
}

textInput.addEventListener('input', getInput)

selectInput.addEventListener('change', getInput); 

checkInput.addEventListener('input', checkBox); 