let name = "Shakib Al Hasan";
let birthDay = "1998-08-07";
let monthlySalary = 20000;
let noOfMonth = 12;

function calculate_age(dob) {
    diff_month = Date.now() - new Date(dob).getTime();
    const age_dt = new Date(diff_month)

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}
function getSalary(monthlySalary, noOfMonth) {
    return (monthlySalary * noOfMonth).toLocaleString();
}
// console.log(calculate_age(birthDay));
// console.log(getSalary(monthlySalary, noOfMonth));


const shakib = {
    name: "Shakib Al Hasan",
    birthDay: "1998-08-07",
    monthlySalary: 20000,
    noOfMonth: 2,
    calculate_age() {
        diff_month = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_month)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    },
    getSalary() {
        return (this.monthlySalary * this.noOfMonth).toLocaleString();
    }
}
// console.log(shakib.calculate_age())
// console.log(shakib.getSalary())



// Encapsolutions 
class Programmer {
    // Private Property
    #name;
    #birthDay;
    constructor(name, birthDay, salaryOfMonth, numOfMonth) {
        this.#name = name;
        this.#birthDay = birthDay;
        this.salaryOfMonth = salaryOfMonth;
        this.numOfMonth = numOfMonth;
    }
    calculate_age() {
        const diff_month = Date.now() - new Date(this.#birthDay).getTime();
        const age_dt = new Date(diff_month)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }
    getSalary() {
        return (this.salaryOfMonth * this.numOfMonth).toLocaleString();
    }
}
const hasan = new Programmer("Hasan Ali", "1999-08-07", 25000, 12);
// console.log(hasan.name);
// console.log(hasan.getSalary());


// Another encapsolution examples
class BankAccount {
    constructor(accountHolder, balance) {
        this._accountHolder = accountHolder;
        this._balance = balance;
    }
    // Getter for account holder
    get accountHolder() {
        return this._accountHolder;
    }
    // Getter for balance
    get balance() {
        return this._balance;
    }
    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`${amount} deposited. New balance: ${this._balance}`);
        } else {
            console.log('Invalid deposit amount.');
        }
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this._balance}`);
        } else {
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }
}

// Creating an instance of BankAccount
let myAccount = new BankAccount('John Doe', 1000);

// Accessing attributes using getters
console.log(`Account Holder: ${myAccount.accountHolder}`);
console.log(`Balance: $${myAccount.balance}`);

// Depositing and withdrawing money
myAccount.deposit(500);
myAccount.withdraw(200);
