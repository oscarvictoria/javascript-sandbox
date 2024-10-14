// insertAdjacentElement Example

let newItem = document.createElement('li')
newItem.innerHTML = `Lettuce
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`

let list = document.querySelector('.items'); 

list.insertAdjacentElement('afterbegin', newItem);



// insertAdjacentText Example


list.insertAdjacentText("beforebegin", 'Rice');

// insertAdjacentHTML example


list.insertAdjacentHTML('afterend','<h3> This is the end of the list </h3>')

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
