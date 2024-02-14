const { Guardian, Student, Teacher } = require('./person');
const { Contact, Address } = require('./contact');
const { Depertment, Subject } = require('./university');


// Guardian ID 01
const guardian = new Guardian('1', 'Hasan', 'Engineer', 50000);
guardian.blood = 'O+';
guardian.contact = new Contact({
    id: 5,
    email: 'h@gmail.com',
    phone: '0179789464'
});
guardian.contact.address = new Address({
    id: 7,
    roadNo: 512,
    city: 'Dhaka',
    region: 'Dhaka',
    country: 'Bangladesh',
    postalCode: 1230
})

// console.log(guardian.toString());
// console.log(guardian.contact + '');
// console.log(guardian.contact.address.country)


// Student ID 01

const student = new Student(2, "Hasan Ali", "st_2024", guardian);
student.blood = 'O-'
student.contact = new Contact({
    id: 'asdf',
    email: 'ali@gmail.com',
    phone: '12334564654',
    alternativePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address
})

// Depertment 01
const depertment = new Depertment({
    id: 1,
    name: 'SWE'
})
student.depertment = depertment;
depertment.subjects = [
    new Subject("01", "Match", 4),
    new Subject("02", "Physics", 3),
    new Subject("01", "Software Testing", 5)
]
const credit = student.depertment.subjects.reduce((a, b) => {
    a += b.credit;
    return a;
}, 0)
// console.log(student)
// console.log(credit)

const dean = new Teacher(1, "khan", depertment.subjects[0]);
const teacher1 =  new Teacher(1, "abul 1", depertment.subjects[1])
const teacher2 =  new Teacher(1, "abul 2", depertment.subjects[2])

depertment.dean = dean;
// depertment.addTeacher(dean)
// depertment.addTeacher(teacher1)
// depertment.addTeacher(teacher2)
depertment.teachers = [dean, teacher1, teacher2]
console.log(student.depertment) 
