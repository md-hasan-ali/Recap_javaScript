
// Encapslations Examples 
class BankAccount1 {
    constructor(accountHolder, balance) {
        this._accountHolder = accountHolder;
        this._balance = balance;
    }
    get accountHolder() {
        return this._accountHolder
    }
    get balance() {
        return this._balance;
    }
    dipositeMoney(amount) {
        if (amount > 0) {
            this._balance = this._balance + amount;
            console.log(`${amount} Diposited: New Balance ${this._balance}`)
        } else {
            console.log('Invalid Amount')
        }
    }
    withdraw(withdrawAmount) {
        if (withdrawAmount > 0 && withdrawAmount < this._balance) {
            this._balance = this.balance - withdrawAmount;
            console.log(`${withdrawAmount} Withdrawn. New Balance ${this._balance}`)
        } else {
            console.log("Invalid Amount")
        }
    }

}
// const myAccount = new BankAccount1("Hasan Ali", 1000);
// console.log(`My Account Name: ${myAccount._accountHolder}`);
// console.log(`My Account Balance: ${myAccount._balance}`);
// myAccount.dipositeMoney(500);
// myAccount.withdraw(200);


// Abstraction Example
class Employe {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getInfo() {
        return `Employe Name: ${this.getName()}, Age ${this.getAge()} and Salary: ${this.getSalary()}`
    }
    getName() {
        throw new Error("Abstract method for get name")
    }
    getAge() {
        throw new Error("Abstract method for get age")
    }
    getSalary() {
        throw new Error("Abstract method for get Salary")
    }
}
class Designer extends Employe {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getName() {
        return `${this.name}`
    }
    getAge() {
        return `${this.age}`
    }
    getSalary() {
        return `${this.salary}`
    }
}
const graphicDesigner = new Designer("Hasan", 24, 30000);
// console.log(graphicDesigner.getInfo())


// Polymorphism example in JavaScript

// Base class
class Shape {
    constructor() { }
    calculateArea() {
        throw new Error('Abstract method calculateArea must be implemented by subclasses.');
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    calculateArea() {
        return this.side ** 2;
    }
}
function printArea(shape) {
    console.log(`Area: ${shape.calculateArea()}`);
}
let circle = new Circle(5);
let square = new Square(4);

// Using the polymorphic function
// printArea(circle);
// printArea(square);


// Composition and encapsulation example
class Engine {
    start() {
        return 'Engine started';
    }
}
class Car {
    constructor() {
        this._engine = new Engine();
    }
    start() {
        return `${this._engine.start()} - Car started`;
    }
}
// // Using composition
// let myCar = new Car();
// console.log(myCar.start());  // Output: Engine started - Car started


// Encapsulation in JS 
class Bus {
    #name;
    #model
    constructor(name, model) {
        this.#name = name;
        this.#model = model;
    }
    getName() {
        console.log(`Car Name is ${this.#name}`)
    }
    getModel() {
        console.log(`Model Name is ${this.#model}`)
    }
    getInformation() {
        console.log(`Brand ${this.#name} and Model ${this.#model}`)
    }
}
const car1 = new Bus("BMW", 105)
// car1.getName()
// car1.getModel()
// car1.getInformation()


// Inheritance Examples 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Vehicle: ${this.make} ${this.model}`);
    }
}

class Car1 extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }

    displayYear() {
        console.log(`Year: ${this.year}`);
    }
}

const myCar = new Car1('Toyota', 'Camry', 2022);
//   myCar.displayInfo(); 
//   myCar.displayYear(); 


// Create a simple banking management system using OOP Concept

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    diposit(amount) {
        this.balance += amount;
        console.log(`Diposited ${amount} into the account No: ${this.accountNumber}`)
    }
    withdrwaMoney(amount) {
        if (this.balance >= amount && this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Invalid Amount")
        }
    }
    getCurrentBalance() {
        console.log(`Account Name: ${this.accountHolderName} and Balance: ${this.balance}`)
    }
}
class BankManagementSystem{
    constructor() {
        this.accounts = [];
    }
    createAccount(accounName, accountHolder, intialBalance) {
        const newAccount = new BankAccount(accounName, accountHolder, intialBalance);
        this.accounts.push(newAccount)
        console.log(`Account ${accounName} created for ${accountHolder} with an initial balance of ${intialBalance}.`);
    }
    getAccount(accNum) {
        const account = this.accounts.find(acc=> acc.accountNumber === accNum)
        return account;
    }
} 


const bankSystem = new BankManagementSystem();
bankSystem.createAccount("01", "Hasan Ali", 500);
bankSystem.createAccount("02", "Hossin Ali", 100);
const hasanAccount = bankSystem.getAccount("01");
const hossinAccount = bankSystem.getAccount("02");
console.log(hasanAccount)
console.log(hossinAccount)

hasanAccount.diposit(2000)
hasanAccount.withdrwaMoney(-4000)
hasanAccount.getCurrentBalance()