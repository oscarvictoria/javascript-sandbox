// Challenge 1 
function getCelsius(num) {

let temp = num; 

temp = (temp - 32) * 5/9; 

temp = Math.round(temp); 



return temp

}

console.log(`The temperature is ${getCelsius(32)} \xB0C`)
// expected result 31.6667

// Formula for celsious 
// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.

// Bonus points

const getCelsius2 = (num) => (Math.round((num - 32) * 5/9)); 

console.log(`The temperature is ${getCelsius2(82)} \xB0C`)


// Traditional Function
// function bob(a) {
//     return a + 100;
//   }
  
//   // Arrow Function
//   const bob2 = (a) => a + 100;