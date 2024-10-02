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

// ## Challenge 2

// **Instructions:**

// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

function minMax(...nums) {
    let obj = {
        min: nums[0],
        max: nums[0]
    }

    for (i = 0; i <= nums.length; i++) {

        if (nums[i] < obj.min)  {

            obj.min = nums[i]

        } 

        }

        // if (numbers[i] < min) { min = numbers[i];


    


        if (nums[i] > obj.max) {
            obj.max = nums[i]; 
        } 

        return (obj);
    

    }

let min; 
let max = numbers.max;    

let numbers = minMax(3,8,9,2); 

min = numbers.min

console.log(max)

