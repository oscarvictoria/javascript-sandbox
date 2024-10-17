let button = document.querySelector('.btn-clear'); 

button.onclick = function() {
  console.log('button clicked')
}

let list = document.querySelector('ul')

button.addEventListener('click', function() {

  let items = list.querySelectorAll('li')

  items.forEach(function(item) {
    item.remove()

  })
  

  

  /* Other ways to remove 

  2.   list.remove()

  3.   list.innerHTML = ''

  4.    while(list.firstChild) {

      list.removeChild(list.firstChild)
    }

  
    */ 
 

  
  

})