const itemForm = document.querySelector('#item-form'); 

console.log(itemForm);

function keydown(e) {
console.log(e.key);
}

function keyup(e) {
    console.log('Keyup')

}

function keypress(e) {
    console.log('keypress')
}



itemForm.addEventListener('keydown', keydown); 

itemForm.addEventListener('keyup', keyup); 

itemForm.addEventListener('keydown', keydown); 