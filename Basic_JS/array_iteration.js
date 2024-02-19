// ForEach array method
const array = [1, 2, 3, 4, 5];

array.forEach((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
})

// Map method
const result = array.map((value, index, array) => {
    return value * 2
})
// console.log(result)


// Filter Method
const res = array.filter((value, index, array) => {
    return value > 2
})
// console.log(res)

// Reduce method 

const res1 = array.reduce((total, valule, index, array) => {
    return total + valule;
}, 5)
// console.log(res1)

const res2 = array.every((value, index, array) => {
    return value > 0
})
// console.log(res2)

const res3 = array.some((value, index, array) => {
    return value > 4
})
// console.log(res3)

const res4 = array.find((value, index, array) => {
    return value > 3
})
// console.log(res4)

// Array.from

console.log(Array.from("ABCDEFGH"));