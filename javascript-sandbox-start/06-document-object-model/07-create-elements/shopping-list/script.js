let li = document.createElement('li')
 li.className = 'item' 
 li.innerHTML = `Eggs
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`

// document.body.appendChild li);

// Append to list 

document.querySelector('.items').appendChild(li)


console.log(li); 
