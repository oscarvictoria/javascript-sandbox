

let button = document.querySelector('.btn')

function add() {
  let item = document.createElement('li')
  item.innerHTML = `Eggs
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`

  document.body.querySelector('.items').appendChild(item)



  

} 

add()

button.addEventListener("click", add);