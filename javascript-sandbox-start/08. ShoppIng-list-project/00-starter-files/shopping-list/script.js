const itemForm = document.querySelector('#item-form')
const list = document.querySelector('.items')
const itemInput = document.querySelector('.form-input')
const clearBtn = document.querySelector('.btn-clear')
const body = document.querySelector('body')


// console.log(itemForm);
// console.log(itemInput)
// console.log(list)

// Functions 
function addItem(e) {
  e.preventDefault()
  console.log('form submit button clicked')
  console.log(itemInput.value)
}

function inputClicked(event) {
  console.log(event.target)
}

function getItem(event) {
  event.preventDefault()
  let item = event.target.value
  console.log(item)

}

// Events 

itemForm.addEventListener('click', getItem); 

// itemInput.addEventListener('click', getItem); 

// body.addEventListener('click', getItem)


// list.addEventListener('click', getItem)

