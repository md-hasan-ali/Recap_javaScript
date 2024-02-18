const names = ['Hasan', 'Ali', 'Ringku']
console.log(names.sort())

const numbers = [1, 2, 3, 54, 1, 2, 8, 51, 3, 6, 41, 30, 20]
const result = numbers.sort((a, b) => {
    // return b - a;
    return a - b;
})
console.log(result)
console.log(result[0])
console.log(result[numbers.length - 1])


const cars = [
    { type: "aVolvo", year: 2020 },
    { type: "AFF", year: 2017 },
    { type: "CAR", year: 2018 }
]

// cars.sort((a, b) => {
//     return a.year - b.year
// })
cars.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0

})
console.log(cars)