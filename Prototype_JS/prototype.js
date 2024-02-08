// Basic Prototype 
function Person(name, age) {
    let person = Object.create(Person.prototype)
    person.name = name;
    person.age = age;
    return person;
}
Person.prototype = {
    eat() {
        console.log("Person is eating...")
    },
    sleep() {
        console.log("Person is sleeping...")
    }
}

// const hasan = Person("Hasan", 25);
// hasan.sleep()


// New keyword 

function Person1(name, age) {
    // let person = Object.create(Person.prototype)
    this.name = name;
    this.age = age;
    // return person;
}
Person1.prototype = {
    eat() {
        console.log("Person is eating...")
    },
    sleep() {
        console.log("Person is sleeping...")
    }
}

const hasan1 = new Person1("Hasan", 25);
// hasan1.sleep()


// Use Class 

class PersonwithClass{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("Person is eating...")
    }
    sleep() {
        console.log("Person is sleeping...")
    }
}
const tamim = new PersonwithClass("Tamim", 36)
tamim.eat();
