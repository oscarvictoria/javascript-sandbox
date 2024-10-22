const itemForm = document.querySelector('#item-form')
const list = document.querySelector('.items')
const itemInput = document.querySelector('.form-input')
const clearBtn = document.querySelector('.btn-clear')


console.log(itemForm);
console.log(itemInput)
console.log(list)

// Functions 
function addItem(e) {
  e.preventDefault()
  console.log('form submit button clicked')
  console.log(itemInput.value)
}

// Events 

itemForm.addEventListener('submit', addItem); 

