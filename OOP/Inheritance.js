// Class with Constructor Method
class Human {
    constructor(name) {
        this.name = name;
        this.mouth = true;
        this.legs = true;
        this.belly = true;
    }
}
const newMan = new Human("Abul");

// Inheritance 01

class Baby extends Human {
    constructor(name) {
        super(name);
        this.cute = true;
    }
    cry() {
        console.log("Every baby does cry")
    }
}
// const Rahim = new Baby("Rahim")


// Inheritance 02

class Teenager extends Human {
    constructor(name) {
        super(name);
        this.emotion = true;
    }
    emotion() {
        console.log("I have a crush")
    }
}
const tenager = new Teenager("Abul khan");
// console.log(tenager)

// Inheritance 03
class Player {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    details() {
        console.log(`${this.name} is ${this.category} Player and  He is ${this.age} years OLD.`)
    }
}
class cricketPlayer extends Player {
    constructor(name, age, centuries, category) {
        super(name, age, category);
        this.centuries = centuries;
    }
}
class footballPlayer extends Player {
    constructor(name, age, goals, category) {
        super(name, age, category);
        this.goals = goals;
    }
}
const musfiq = new cricketPlayer("Musfiq", 35, 100, "cricket");
musfiq.details()
const messi = new footballPlayer("Messi", 35, 100, "football");
messi.details()