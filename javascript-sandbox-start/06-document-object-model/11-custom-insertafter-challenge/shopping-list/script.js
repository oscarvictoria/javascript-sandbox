function insertAfter(newElement, currentElement) {
    const li = document.createElement('li'); 
    li.innerText = `${newElement}`


    

    currentElement.insertAdjacentElement('afterend', li);


}

let juice = document.querySelector('li:nth-child(2)')

let thirdItem = document.querySelector('li:nth-child(3)')





// Solution 

const li = document.createElement('li');
li.textContent = 'Paper';

const firstItem = document.querySelector('li:first-child');

function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
  }

  insertAfter(li, thirdItem)