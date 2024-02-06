// constructor function 
function circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log("Draw")
    }
}
const newCircle = new circle(1)
// console.log(newCircle.draw)


let colors = ['Red', 'Green', 'Blue'];

let [firstColor, secondColor] = colors;
console.log(firstColor); 
console.log(secondColor);