let title = document.querySelector('.title')

// console.log(title.innerHTML);
title.innerHTML = "Grocery List"


let header = document.querySelector('#app-title'); 

header.textContent = 'Grocery List'; 


let form = document.querySelector('.form-control');



let button = document.querySelector('.btn')
button.textContent =  "+"

let itemList = document.querySelector('#item-list').children; 

itemList[0].innerHTML =  `Mango
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`