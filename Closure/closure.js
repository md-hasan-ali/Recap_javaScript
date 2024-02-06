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
appFunction("api url link needed!!");
console.log("hello")