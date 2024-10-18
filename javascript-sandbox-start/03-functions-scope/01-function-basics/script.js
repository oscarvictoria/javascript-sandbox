
// Higher Order Function 

function printName(callback, first, last) {
  let result = first + ' ' + last; 
  callback(result)

}

// Callback function
function getNames(result) {
  console.log(result)

}
const name = printName(getNames, 'Oscar', 'Gonzalez')
console.log(name);


// Higher Order Function
function smart(func, number) {
  console.log(func(number))

}

// Callback function 
function addFive(num) {
  return num + 5
}

const sum = smart(addFive, 5); 

console.log(sum);





// Another Example 

//Callback

function subtract(num) {
  return num - 1

}

// Higher Order Function

function result(callback, num) {
  console.log(callback(num))
  // subtract(num - 1)
}


const value = result(subtract, 5)

console.log(value)

// More Examples 


function advanceFunction(func, num) {
  return func(num)
  // divideByTwo(num)
  // num / 2 

}

function divideByTwo(num) {
  return num / 2

}

console.log(advanceFunction(divideByTwo, 20)); 
