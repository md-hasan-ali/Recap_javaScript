// Example: Determining the day of the week using a switch statement

function getDayOfWeek(dayCode) {
    let day;

    switch (dayCode) {
        case 1:
            day = 'Sunday';
            break;
        case 2:
            day = 'Monday';
            break;
        case 3:
            day = 'Tuesday';
            break;
        case 4:
            day = 'Wednesday';
            break;
        case 5:
            day = 'Thursday';
            break;
        case 6:
            day = 'Friday';
            break;
        case 7:
            day = 'Saturday';
            break;
        default:
            day = 'Invalid day code';
    }

    return day;
}

// Test the function with a day code
let dayCode = 3;
let result = getDayOfWeek(dayCode);

console.log(`For day code ${dayCode}, the day of the week is: ${result}`);
