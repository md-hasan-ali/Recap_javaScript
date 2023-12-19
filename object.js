//By creating instance of Object

const emp = new Object()
emp.id = 102,
    emp.name = "Hasan Ali"
// console.log(emp.name)

// By creating constructor 

function emp1(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp1(103, "Vimal Jaiswal", 30000);

console.log(e.id + " " + e.name + " " + e.salary);  

// Object with this keyword

let calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
    },
    subtract: function(num) {
        this.value -= num;
    },
    getValue: function() {
        return this.value;
    }
};

calculator.add(5);
calculator.subtract(2);

// console.log(calculator.getValue()); 


// Object methods using ES6+ syntax
let car = {
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

console.log(car.getInfo()); 