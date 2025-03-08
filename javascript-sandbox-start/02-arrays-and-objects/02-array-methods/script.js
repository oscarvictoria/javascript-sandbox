// Push 

let arr = [34, 55, 95, 20, 15];

arr.push(100);


arr.pop()



arr.unshift(99); 

arr.shift();

// arr.reverse();

arr.includes(100);



x = arr.includes(200);

x = arr.slice(0, 4)

// removing an item from an array 
// x = arr.splice(1, 4); 

x = arr.splice(1, 4).reverse().toString().charAt(0); 


console.log(x);
