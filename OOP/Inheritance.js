// Class with Constructor Method
class Human {
    constructor(name){
        this.name = name;
        this.mouth = true;
        this.legs = true;
        this.belly = true;
    }
}
const newMan = new Human("Abul");

// Inheritance 01

class Baby extends Human{
    constructor(name) {
        super(name);
        this.cute = true;
    }
    cry() {
        console.log("Every baby does cry")
    }
}
// const Rahim = new Baby("Rahim")


// Inheritance 02

class Teenager extends Human{
    constructor(name) {
        super(name);
        this.emotion = true;
    }
    emotion() {
        console.log("I have a crush")
    }
}
const tenager = new Teenager("Abul khan");
console.log(tenager)