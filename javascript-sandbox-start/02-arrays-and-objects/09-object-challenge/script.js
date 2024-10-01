// Step 1. Create Array of Objects 

const library = [

  obj1  = {
    title: 'Outliers',
    author: 'Malcolm Gladwel',
    status: {
      own: true,
      reading: false,
      read: false, 

    },

  },

  obj2  = {
    title: 'The 5AM Club',
    author: 'Robin Sharma',
    status: {
      own: true,
      reading: false,
      read: true, 

    },

  },
  obj3  = {
    title: 'Mastery',
    author: 'Robert Greene',
    status: {
      own: true,
      reading: true,
      read: false, 

    },

  },

]

let x;

x = library[0].status.own; 

// Step 2. Set the read property to true

obj1.status.read = true; 
obj2.status.read = true; 
obj3.status.read = true; 

x = library[2].status.read;


/*  Step 3. Destructure the title from the first book and rename the 
variable to `firstBook` */ 

const { title: firstBook } = library[0]; 



console.log(firstBook);


// Step 4. Turn the array of objects into JSON string

const libraryJSON = JSON.stringify(library); 

console.log(libraryJSON); 

