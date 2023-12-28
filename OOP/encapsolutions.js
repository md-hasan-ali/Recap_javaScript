let name = "Shakib Al Hasan";
let birthDay = "1998-08-07";
let monthlySalary = 20000;
let noOfMonth = 12;

function calculate_age(dob) {
    diff_month = Date.now() - new Date(dob).getTime();
    const age_dt = new Date(diff_month)

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}
function getSalary(monthlySalary, noOfMonth) {
    return (monthlySalary * noOfMonth).toLocaleString();
}

// console.log(calculate_age(birthDay));
// console.log(getSalary(monthlySalary, noOfMonth));


const shakib = {
    name: "Shakib Al Hasan",
    birthDay: "1998-08-07",
    monthlySalary: 20000,
    noOfMonth: 2,
    calculate_age() {
        diff_month = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_month)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    },
    getSalary() {
        return (this.monthlySalary * this.noOfMonth).toLocaleString();
    }
}
// console.log(shakib.calculate_age())
// console.log(shakib.getSalary())


// Encapsolutions 
class Programmer {
    // Private Property
    #name;
    #birthDay;
    constructor(name, birthDay, salaryOfMonth, numOfMonth) {
        this.#name = name;
        this.#birthDay = birthDay;
        this.salaryOfMonth = salaryOfMonth;
        this.numOfMonth = numOfMonth;
    }
    calculate_age() {
        const diff_month = Date.now() - new Date(this.#birthDay).getTime();
        const age_dt = new Date(diff_month)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }
    getSalary() {
        return (this.salaryOfMonth * this.numOfMonth).toLocaleString();
    }
}
const hasan = new Programmer("Hasan Ali", "1999-08-07", 25000, 12);
console.log(hasan.name);
// console.log(hasan.getSalary());
