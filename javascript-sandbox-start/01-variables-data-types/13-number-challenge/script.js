/* 

Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

- You can log the output string directly or put them in separate variables and log them like below.
- You can use string concatenation or template literals for the output.

*/ 


let x; 

x = Math.random() * 101; 

x = Math.round(x)

X = Math.floor(x); 

console.log(x); 

let y; 

y = Math.random() * 51; 

y = Math.round(y); 

y = Math.floor(y); 

console.log(y); 



const sum = x + y; 

const difference = x - y; 

const product = x * y; 

const quotient = x / y; 

const remainder = x % y; 

console.log(x + ' + ' + y + ' = ' + sum);
console.log(x + ' - ' + y + ' = ' + difference)
console.log(x + ' * ' + y + ' = ' + product)
console.log(x + ' / ' + y + ' = ' + quotient)
console.log(x + ' % ' + y + ' = ' + remainder)

