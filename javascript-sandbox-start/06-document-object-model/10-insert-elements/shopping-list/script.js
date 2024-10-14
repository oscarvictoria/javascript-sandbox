// insertAdjacentElement Example

let newItem = document.createElement('li')
newItem.innerHTML = `Lettuce
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`

let list = document.querySelector('.items'); 

list.insertAdjacentElement('beforeend', newItem);



// insertAdjacentText Example

// insertAdjacentHTML example

// insertBefore Example


/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
