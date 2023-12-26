// Static methods in a class
class MathOperations {
    static add(x, y) {
        return x + y;
    }
    static multiply(x, y) {
        return x * y;
    }
}

// Using static methods without creating an instance
let sum = MathOperations.add(3, 5);
console.log(sum); 

let product = MathOperations.multiply(2, 4);
console.log(product);  