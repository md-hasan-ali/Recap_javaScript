//By creating instance of Object

const emp = new Object()
emp.id = 102,
    emp.name = "Hasan Ali"
// console.log(emp.name)

// By creating constructor 

function emp1(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp1(103, "Vimal Jaiswal", 30000);

console.log(e.id + " " + e.name + " " + e.salary);  