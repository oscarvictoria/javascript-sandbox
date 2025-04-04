let title = document.querySelector('.title')

// console.log(title.innerHTML);
title.innerHTML = "Grocery List"


let header = document.querySelector('#app-title'); 

header.textContent = 'Grocery List'; 


let form = document.querySelector('#item-input');

let text = form.attributes.getNamedItem('placeholder');

text.textContent = 'Enter Item Here'

console.log(text)



// Using querySelector to change text of the document

let button = document.querySelector('.btn')
button.textContent =  "+"

let itemList = document.querySelector('#item-list').querySelectorAll('li')

let items = document.querySelectorAll('.items');
console.log(items[0].innerText);



// Using querySelector to change text of the document

itemList[0].innerHTML =  `Mango
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`




// Use an array method to change Milk to Almond Milk 



itemList.forEach(function(item) {

  if (item.innerText === 'Milk') {

    item.innerHTML = `Almond Milk
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`

  }


})

// Using query selector to change the color of the items in the list 

let list = document.querySelector('ul');
let first = list.querySelector('li');
let second = list.querySelector('li:nth-child(2)');
console.log(second.innerText);
first.style.color = 'red';
second.style.backgroundColor = 'orange'

