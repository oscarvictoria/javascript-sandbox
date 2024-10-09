// console.dir(window.document)

// console.log(document.body.innerText);

console.log(document.links[0])

// document.body.innerHTML = '<h1> Hello World </h1>'


const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
// alert(paragraphs[0].nodeName);

// Setting text content

let h1 = document.querySelector('h1'); 

// h1.textContent = 'Welcome'

const clearText = document.querySelector('#btn');
const showText = document.querySelector('#display')

// clearText.addEventListener("click", () => {
//   h1.textContent = "";
// });

function clear() {
  h1.innerHTML = ''
}

function display() {
  h1.innerHTML = 'Welcome'
}


clearText.addEventListener('click', clear);
showText.addEventListener('click', display); 


// Adding a child Element 


