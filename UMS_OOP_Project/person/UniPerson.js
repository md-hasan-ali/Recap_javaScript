const Person = require('./Person')

const _depertment = Symbol('depertment')
const _account = Symbol('account')

class UniPerson extends Person {
    constructor(id, name, depertment, account) {
        super(id, name)
        this[_depertment] = depertment;
        this[_account] = account;
    }
    get depertment() {
        return this[_depertment]
    }

    set depertment(value) {
        this[_depertment] = value;
    }

    get account() {
        return this[_account]
    }
    
    set account(value) {
        this[_account] = value
    }

    toString() {
        super.toString();
        console.log(`Depertment: ${this[_depertment]}, Account: ${this[_account]}`)
    }

    // print() {
    //     super.print()
    //     console.log(`Depertment: ${this[_depertment]}, Account: ${this[_account]}`)
    // }
}

module.exports = UniPerson;