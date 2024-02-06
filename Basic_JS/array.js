let numbers = [1, 2, 3, 4, 5];
// Using map to double each element
let doubled = numbers.map(num => num * 2);

// Using filter to get even numbers
let evens = numbers.filter(num => num % 2 === 0);

// Using reduce to calculate the sum
let sum = numbers.reduce((acc, num) => acc + num, 0);




// Array destructuring

let colors = ['Red', 'Green', 'Blue'];

let [firstColor, secondColor] = colors;
// console.log(firstColor); 
// console.log(secondColor);



// Using the array constructor
let myArray = new Array();

// Adding elements to the array
myArray[0] = 'Apple';
myArray[1] = 'Banana';
myArray[2] = 'Orange';
myArray[3] = 'Apple';
myArray[4] = 'Orange';

// for(i=0; i<myArray.length; i++) {
//     console.log(myArray[i]); 
//     if()
// }

function findDuplicatesUsingSet(arr) {
    let uniqueElements = new Set();
    let duplicates = new Set();

    for (let element of arr) {
        if (uniqueElements.has(element)) {
            duplicates.add(element);
        } else {
            uniqueElements.add(element);
            console.log(element)
        }
    }
    return Array.from(duplicates);
}

let arrayWithDuplicates = [1, 2, 3, 4, 3, 2, 5];
let duplicatesSet = findDuplicatesUsingSet(arrayWithDuplicates);
// console.log(duplicatesSet);  // Output: [2, 3]
