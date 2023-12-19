// Function with a rest parameter to handle variable arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
let total = sum(1, 2, 3, 4, 5, 10); // Output: 25
// console.log(total)


// Example of using the apply method

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 52, 36, 85, 20, 30, 10]
let max = Math.max.apply(null, array)
// console.log(max)

let array1 = [1,2,3,4];  
let newarray=[5,6,7,8,10,20]  
array.push.apply(array1, newarray);  
// console.log(array1)

// Example of using the Bind method

let website = {  
    name: "Hasan Ali",  
    getName: function() {  
      return this.name;  
    }  
  }  

  let unboundGetName = website.getName;  
  console.log(unboundGetName)
  let boundGetName = unboundGetName.bind(website);  
  console.log(boundGetName());  