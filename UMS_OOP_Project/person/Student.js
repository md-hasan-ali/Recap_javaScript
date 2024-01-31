const UniPerson = require('./UniPerson')

const _studentID = Symbol('studentID');
const _guardian = Symbol('guardian')
const _exams = Symbol('exams')
const _fee = Symbol('fee')

class Student extends UniPerson{
    constructor(id, name, studentID, guardian) {
        super(id, name);
        this[_studentID] = studentID;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fee] = null;
    }
    
    get studentID() {
        return this[_studentID];
    }
    get guardian() {
        return this[_guardian];
    }
    get exams() {
        return this[_exams]
    }
    addExam(exam) {
        this[_exams].push(exam)
    }
    get fee() {
        return this[_fee]
    }
    set fee(value) {
        this[_fee] = value;
    }
    toString() {
        super.toString()
        console.log(`Student ID: ${this[_studentID]}`)
    }
}

module.exports = Student;