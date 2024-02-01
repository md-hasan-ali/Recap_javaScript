const { Guardian } = require('./person');
const { Contact, Address } = require('./contact')


const guardian = new Guardian('1', 'Hasan', 'Engineer', 50000);
guardian.blood = 'O+';
guardian.contact = new Contact({
    id: 5,
    email: 'h@gmail.com',
    phone: '0179789464'
});
guardian.contact.address = new Address({
    id:7,
    roadNo: 512,
    city: 'Dhaka', 
    region: 'Dhaka',
    country: 'Bangladesh',
    postalCode: 1230
})

console.log(guardian.toString());
console.log(guardian.contact + '');

