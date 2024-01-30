const Person = require('./Person')

const _profession = Symbol('profession')
const _income = Symbol('income')

class Guardian extends Person {
    constructor(id, name, profession, income) {
        super(id,name);
        this[_profession] = profession;
        this[_income] = income;
    }
    get profession() {
        return this[_profession]
    }
    get income() {
        return this[_income]
    }
    print() {
        super.print();
        console.log(`Profession: ${this[_profession]}, Income: ${this[_income]}`)
    }
}

module.exports = Guardian;