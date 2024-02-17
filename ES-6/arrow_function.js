// Normal function 

function sayHello() {
    console.log('Hello ' + this.name)
}
const obj1 = {
    name: 'abul',
    sayHello: sayHello
}
const obj2 = {
    name: 'abul khan',
    sayHello: sayHello
}

// obj1.sayHello()

// Arrow function
const greetArrow = () => {
    console.log('Hello ' + this.name);
};

const obj3 = {
    name: 'Alice',
    greet: greetArrow
};

const obj4 = {
    name: 'Bob',
    greet: greetArrow
};

obj3.greet();
obj4.greet();