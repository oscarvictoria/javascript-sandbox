// Callback functions

/* 

Steps: 

1. Define higer order function. It should take a function as a parameter. We often 
return the value of the callback function. 

2. Define another function to insert in the parameter of the first function. 

3. Make the second function do something using the input parameter if you want it to use
a parameter in the first function 

4. Invoke the first function

*/ 

// 1. 

function printData(func, val) {
  let result = printHello()
  console.log(result + ' ' + val)

}

// 2. 


function printHello() {
// 3. 

  return 'Hello'
}




// 4. 

printData(printHello, 'Danny');


// Example 2

function display(func, num) {
  let randomNumber = getRandom(num)
  console.log(`The random number between 0 and ${num} is ${randomNumber}`)

}


function getRandom(max) {
  return Math.floor(Math.random() * max + 1);

}

display(getRandom, 4);