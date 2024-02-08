class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is Eating...!`)
    }

    static name() {
        console.log("My name is Hasan Ali")
    }
}
class Cricketer extends Person{
    constructor(name, age, type, country) {
        super(name, age)
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is Playing...!`)
    }
}

let shakib = new Cricketer("Shakib", 36, "All Rounder", "Bangladesh");
console.log(shakib.play())
Person.name()