// Basic class example
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
// Creating instances of the Animal class
let cat = new Animal('Cat', 'Meow');
let dog = new Animal('Dog', 'Woof');

// cat.makeSound();
// dog.makeSound();


class Employee extends Animal {
    constructor(name, sound) {
        super(name, sound)
    }
}
var emp = new Employee("Abul", "Manuser moto");
console.log("Name", emp.name + ", " + emp.sound);



// Inheritance with classes
// class Bird extends Animal {
//     constructor(name, sound, canFly) {
//         super(name, sound);
//         this.canFly = canFly;
//     }
//     fly() {
//         if (this.canFly) {
//             console.log(`${this.name} is flying.`);
//         } else {
//             console.log(`${this.name} cannot fly.`);
//         }
//     }
// }
// // Creating instances of the Bird class
// let sparrow = new Bird('Sparrow', 'Chirp', true);
// let penguin = new Bird('Penguin', 'Honk', false);

// sparrow.makeSound();
// sparrow.fly();

// penguin.makeSound();
// penguin.fly();





