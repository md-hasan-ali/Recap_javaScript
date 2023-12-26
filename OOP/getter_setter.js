// Getter and setter methods in a class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get area() {
        return this._width * this._height;
    }
    set dimensions({ width, height }) {
        this._width = width;
        this._height = height;
    }
}
// Creating an instance of the Rectangle class
let rectangle = new Rectangle(5, 8);
console.log(rectangle.area);  // Output: 40

rectangle.dimensions = { width: 10, height: 3 };
console.log(rectangle.area);  // Output: 30
