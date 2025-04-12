const list = document.querySelector('ul'); 
const firstItem = document.querySelector('li:nth-child(2)'); 

function removeFirstItem() {
    firstItem.remove()
}


function removeSecondChild() {
    list.removeChild(firstItem); 
}


function removeNumber(number) {
    const li = document.querySelector(`li:nth-child(${number})`); 
    list.removeChild(li);
}



removeNumber(4); 

removeNumber(1);

