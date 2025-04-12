const list = document.querySelector('ul'); 
const firstItem = document.querySelector('li:nth-child(2)'); 

function removeFirstItem() {
    firstItem.remove()
}


function removeSecondChild() {
    list.removeChild(firstItem); 
}



