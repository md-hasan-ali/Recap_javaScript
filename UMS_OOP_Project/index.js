const { Guardian, Student } = require('./person');
const { Contact, Address } = require('./contact');
const { Depertment } = require('./university');


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


console.log(student)