const ul = document.querySelector('ul'); 

function itemClicked(e) {
    console.log(e.target)
    if (e.target.tagName === 'LI'){
     e.target.style.color = 'red'
    }



}


ul.addEventListener('click', itemClicked); 
