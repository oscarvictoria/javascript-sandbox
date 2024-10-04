// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax


// Loop through an array 

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim']; 

for(let i = 0; i < names.length; i++) {
  if (names[i] === 'Sara') {
    console.log(`${names[i]} is the best!`)
  } else {
    console.log(names[i]); 
  }

  
} 
