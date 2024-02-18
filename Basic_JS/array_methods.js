// toString(), join() method 
const array = ['hasan', 'ringku', 'ali']
console.log(array.toString())
console.log(array.join(" * "))

// splice method 
// array.splice(1,1, 'Lemon', 'Alu')
// console.log(array) 

array.splice(0, 0, 'Lemon', 'Alu')
console.log(array)

const array2 = ['payaj', 'potol']
const array3 = ['payaj', 'potol']
const mergeArray = array.concat(array2, array3)
console.log(mergeArray)


// Slice method
console.log(mergeArray.slice(1, 3))