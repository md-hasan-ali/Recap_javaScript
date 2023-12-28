// Polymorphism 
class Player {
    #name;
    constructor(name, age, category) {
        this.#name = name;
        this.age = age;
        this.category = category;
    }
    getName() {
        return this.#name;
    }
    details() {
        console.log(`${this.#name} is ${this.category} Player and  He is ${this.age} years OLD.`)
    }
}
class cricketPlayer extends Player {
    constructor(name, age, centuries, category) {
        super(name, age, category);
        this.centuries = centuries;
    }
    details() {
        console.log(`${this.getName()} is ${this.category} Player and  He is ${this.age} Bochor.`)
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