// Prototype 

function Person(name, age) {
    let person = Object.create(Person.prototype)
    person.name = name;
    person.age= age;
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

const hasan = Person("Hasan", 25);
hasan.sleep()
