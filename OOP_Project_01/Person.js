
class Person {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    print() {
        console.log(`Name: ${this._name}, Email: ${this._email}`)
    }
}

module.exports = Person;