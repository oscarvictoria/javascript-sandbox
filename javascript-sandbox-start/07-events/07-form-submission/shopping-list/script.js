let itemForm = document.querySelector('#item-form'); 

function getValues(e) {
const item = document.querySelector('.form-input')
const priority = document.querySelector('#priority-input');
e.preventDefault()
console.log(item.value, priority.value);

}

itemForm.addEventListener('submit', getValues); 