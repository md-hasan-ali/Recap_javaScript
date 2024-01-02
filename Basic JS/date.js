// Getting individual components of a date
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // Months are zero-indexed (0 = January)
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// console.log(minutes)

// Calculating date differences
let startDate = new Date('1998-01-01');
let endDate = new Date('2023-12-20');
let timeDifference = endDate - startDate; // Result in milliseconds

let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Days between ${startDate} and ${endDate}: ${daysDifference} days`);
