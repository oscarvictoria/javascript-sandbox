function calculator(num1, num2, operator) {
  let result; 
  
  switch (operator) {
    case "+": 
    result = num1 + num2; 
    break
    

    case "-":  
    result = num1 - num2
    break 

    case "*":  
    result = num1 * num2;
    break 

    case "/": 
    result = num1 / num2
    break

    default: 
    result = console.log('error, not a valid operator')
  }

  return result; 



}

console.log(calculator(12, 6, '/')); 