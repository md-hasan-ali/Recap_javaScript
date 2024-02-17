// Example 01
var num1 = 10; // Global 
const sum = () => {
    var num2 = 20; // Closure
    return () => {
        return num1 + num2;
    }
}
const myFunc = sum();
// console.dir(myFunc)


// Example 02
const bankAccount = (initialBalance) => {
    let balance = initialBalance;
    return () => {
        return balance
    }
}
// const account = bankAccount(500)
// console.log(account())


// Example 03 
(function () {
    var num3 = 20;
    var sum1 = function () {
        var num4 = 30;
        return num3 + num4;
    }
    // console.log(sum1())
})();


// Example 04 

function stopWatch() {
    var startTime = Date.now()
    function getDelay() {
        console.log(Date.now() - startTime)
    }
    return getDelay;
}

const timer = stopWatch();
// timer();
// timer = null;


// Example 05 [Asynchronous way]

function appFunction(url) {
    fetch(url)
        .then((res) => {
            console.log(res)
        })
}
// appFunction("api url link needed!!");
// console.log("hello")


const counter = () => {
    let counter = 0;
    const increment = () => {
        counter++;
        console.log(counter)
    }
    return increment;
}
// const result = counter()
// result()
// result()

function createPerson(name) {
    let age = 0;

    function growOlder() {
        age++;
        console.log(`${name} is now ${age} years old.`);
    }

    function getAge() {
        return age;
    }

    return {
        growOlder,
        getAge
    };
}

// const person = createPerson('Alice');
// person.growOlder(); 
// console.log(person.getAge()); 


const fetchData = (url, callback) => {
    setTimeout(() => {
        const data = 'Data Fatch from' + url;
        callback(data)
    }, 2000)
}
const processData = (url) => {
    fetchData(url, (data) => {
        console.log('Data Fetching...')
        console.log(data)
    })
}
processData('https://jsonplaceholder.typicode.com/posts/1')