class BetterArray {
    #items;
    constructor(items) {
        this.#items = [];
    }
    getItems() {
        return [...this.#items]
    }
    addItems(item) {
        return this.#items.push(item)
    }
    removeItem(itemToDelete) {
        this.#items = this.#items.filter((item) => item !== itemToDelete)
    }
    modifyItem(changeItem, newValue) {
        const index = this.#items.indexOf(changeItem);
        if (index !== -1) {
            this.#items[index] = newValue;
        }
    }
}
const array = new BetterArray();
console.log(array.addItems("I love Bangladesh"))
console.log(array.getItems())
array.modifyItem("I love Bangladesh", "I love Coding")
console.log(array.getItems())


// Abstraction example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Name: ${this.getName()}, Age: ${this.getAge()}`;
    }
    getName() {
        throw new Error('Abstract method getName must be implemented by subclasses.');
    }
    getAge() {
        throw new Error('Abstract method getAge must be implemented by subclasses.');
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getName() {
        return `${this.name} (Student)`;
    }
    getAge() {
        return `${this.age} years`;
    }
    getGrade() {
        return `Grade: ${this.grade}`;
    }
}

// Creating instances
let student = new Student('Alice', 20, 'A');

console.log(student.getInfo()); 
console.log(student.getGrade());
