let itemForm = document.querySelector('#item-form'); 

function getValues(e) {
const item = document.querySelector('.form-input')
const priority = document.querySelector('#priority-input');
e.preventDefault()
// console.log(item.value, priority.value);

}




function getData (e) {
    e.preventDefault()
  
    const formData = new FormData(itemForm); 
    const item = formData.get('item')
    console.log(item);
    
}

itemForm.addEventListener('submit', getData); 

