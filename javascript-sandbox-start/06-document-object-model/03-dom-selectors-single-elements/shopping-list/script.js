let title = document.querySelector('.title')

// console.log(title.innerHTML);
title.innerHTML = "Grocery List"


let header = document.querySelector('#app-title'); 

header.textContent = 'Grocery List'; 


let form = document.querySelector('#item-input');

let placeHolder = form.attributes[4]; 

placeHolder.textContent = 'Enter Item Here'; 



let button = document.querySelector('.btn')
button.textContent =  "+"

let itemList = document.querySelector('#item-list').querySelectorAll('li')


itemList[0].innerHTML =  `Mango
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`




// Use an array method to change Milk to Almond Milk 

console.log(itemList)

itemList.forEach(function(item) {

  if (item.innerText === 'Milk') {

    item.innerHTML = `Almond Milk
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`

  }
  


})