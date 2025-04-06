// Using innerHTML 

let button = document.querySelector('.btn')

function add() {
  let item = document.createElement('li')
 item.innerHTML = `Eggs
  <button class="remove product btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`

  document.body.querySelector('.items').appendChild(item);



  

} 

add()

button.addEventListener("click", add);

// Using createElement method 


function createItem(product) {
  // Creates the element
  let newProduct = document.createElement('li') 
  newProduct.appendChild(document.createTextNode(product));
  

  // Adds to the list
  document.querySelector('.items').appendChild(newProduct); 

  let list = document.querySelector('.items'); 

  // Creates the button 
  let button = document.createElement('button'); 
  button.className = 'remove-item btn-link text-red'
  
 // Adds button to the li
  newProduct.appendChild(button);


  // creates icon 
  let icon = document.createElement('i'); 
  icon.className = 'fa-solid fa-xmark'

  // Adds icon to the button 
  button.appendChild(icon)

  
}


createItem('Beans');
createItem('rice')