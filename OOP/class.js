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

cat.makeSound();
dog.makeSound(); 







