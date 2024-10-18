// Callback functions

/* 

Steps: 

1. Define higer order function. It should take a function as a parameter. We often 
return the value of the callback function. 

2. Define another function to insert in the parameter of the first function. 

3. Make the second function do something using the input parameter if you want it to use
the parameter in the first function 

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