const Person = require('./Person')

const _depertment = Symbol('depertment')
const _account = Symbol('account')

class UniPerson {
    constructor(id, name, depertment, account) {
        super(id, name)
        this[_depertment] = depertment;
        this[_account] = account;
    }
    get depertment() {
        return this[_depertment]
    }

    get account() {
        return this[_account]
    }

    print() {
        super.print()
        console(`Depertment: ${this[_depertment]}, Account: ${this[_account]}`)
    }
}

module.exports = UniPerson;