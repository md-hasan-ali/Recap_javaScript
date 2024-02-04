// explicit binding

let printName = function(v1, v2) {
    console.log(`${this.name} is ${v1} & ${v2}`)
}

let shakib = {
    name: 'Shakib',
    age: 35
}
let v1 = 'faltu';
let v2 = 'faltu 2'

// let array = [v1, v2]

// printName.call(shakib)
// printName.call(shakib, array)
const result = printName.bind(shakib, v1, v2)
result()


// New Binding 
function Person(name, age) {
    // let this = Object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age}`)
}
const sakib = new Person("shakib", 35);

// window binding 

let PrintAge = function() {
    console.log(this.age)
}
const hasan = {
    age: 25
}
PrintAge()

