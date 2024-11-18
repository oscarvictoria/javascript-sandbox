
window.onload = function() {
  document.querySelector('h1').textContent = 'Hello'
}

function execute(e) {
  console.log('window resized ' +  e.target.innerWidth)

}

function copy() {
  console.log('Data was copied')
}

window.addEventListener('resize', execute) 

window.addEventListener('copy', copy)