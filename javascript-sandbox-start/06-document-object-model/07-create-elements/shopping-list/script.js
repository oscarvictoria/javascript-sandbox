let li = document.createElement('li')
 li.className = 'item' 
 li.innerHTML = `Eggs
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`


// Append to list 

document.querySelector('.items').appendChild(li)


// Creates a div and adds it to the end of the document 

const div = document.createElement('div'); // Creates the div

div.title = 'Creating Elements' // Creates Title 
div.className = 'Chapter 07' // Creates Class 
div.id = 'Elements' // Creates id
div.setAttribute('title', 'Test') // Sets Attributes 
div.innerText = 'Hello'

document.body.appendChild(div);

console.log(div);
