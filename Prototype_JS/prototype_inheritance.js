function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Cricketer(name, age, type, country) {
    Person.call(this)
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}
Person.prototype = {
    play: function () {
        console.log("Person is playing...!")
    }
}
Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer;

let shakib = new Cricketer("Shakib", 36, "All Rounder", "Bangladesh");
console.log(shakib)