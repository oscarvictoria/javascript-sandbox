const numbers = [1,2,3,4,5,6,7,8,9]

// Filter even numbers using filter method 

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; 
})

// console.log(evenNumbers); 


// Using For Each method, display only even numbers 



numbers.forEach(function(item) {
  let x =[]; 

  if (item % 2 === 0) {
    x.push(item)
  }

 

})

const students = [
  { name: "Alice", age: 20, major: "Computer Science" },
  { name: "Bob", age: 22, major: "Mathematics" },
  { name: "Charlie", age: 21, major: "History" }
];


// Display only student s 21 and over

let newArr = []; 

const overAge = students.filter(function (student) {

  
   if (student.age >= 21) {
    newArr.push(student.name)
   } 

}) 

console.log(newArr)

// for(let i = 0; i <= students.length; i++) {
//   console.log(students.name); 
// }




// for (let i = 0; i <= overAge.length - 1; i++) {
//   newArr.push(overAge[i].name); 

// }

// console.log(newArr); 





// Expected result -[ 'Bob, 'Charlie ] 

