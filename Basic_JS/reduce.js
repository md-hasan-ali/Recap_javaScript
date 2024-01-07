const numbers = [1, 2, 3, 4];
result = numbers.reduce((total, currValue) => {
    return total + currValue
})
console.log(result)