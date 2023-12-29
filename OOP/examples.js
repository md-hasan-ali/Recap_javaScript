
// Encapslations Examples 
class BankAccount {
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
const myAccount = new BankAccount("Hasan Ali", 1000);
console.log(`My Account Name: ${myAccount._accountHolder}`);
console.log(`My Account Balance: ${myAccount._balance}`);
myAccount.dipositeMoney(500);
myAccount.withdraw(200);


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
console.log(graphicDesigner.getInfo())
