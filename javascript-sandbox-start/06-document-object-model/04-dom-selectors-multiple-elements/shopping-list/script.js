let items = document.querySelectorAll('.item'); 

console.log(items[3].innerText)

// Change the color of the items using querySelectorAll 
 let firstItem = items[0]; 
 let secondItem = items[1]; 
 let thirdItem = items[2];

 let newItem = 'Grapes'


 firstItem.style.color = 'red'
 secondItem.style.backgroundColor = 'orange'

 thirdItem.innerHTML = ` ${newItem}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`

thirdItem.style.backgroundColor = 'purple'
thirdItem.style.color = 'white'

