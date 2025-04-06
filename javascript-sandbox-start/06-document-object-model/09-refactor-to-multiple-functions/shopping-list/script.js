function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  let button = createButton('remove-item btn-link text-red')

  li.appendChild(button)



  document.querySelector('.items').appendChild(li);
}




function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes; 

  let icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button

}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;

}

createNewItem('Chips');

 

// Using HTML 

function createItem(item) {
  const li = document.createElement('li'); 
  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`
  document.querySelector('.items').appendChild(li); 
}


createItem('Chicken');

createNewItem('Ice');
