// Adding a Prototype Method
// Time to add a prototype method to Rectangle. This method will only make sense for rectangles, so we'll want to add it directly to Rectangle.prototype.

//  Your Goal: Create a Flip Function
// Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.

//  You may need to store a temporary variable in order to flip the dimensions!

// Example:

// const rectangle = new Rectangle(10, 20);

// console.log(rectangle.height, rectangle.width); // 10, 20

// rectangle.flip();

// console.log(rectangle.height, rectangle.width); // 20, 10
//  Be careful you don't declare the method flip on Rectangle.prototype before using Object.create! The Object.create method will return a completely new object to which you can attach the method.

const Shape = require('./Shape');
Rectangle.prototype = Object.create(Shape.prototype)
function Rectangle(x, y, height, width) {
   Shape.call(this, x, y);
this.height = height;
this.width = width; 

}
Rectangle.prototype.flip = function() {
const temp = this.height;
this.height = this.width;
this.width = temp;
}

module.exports = Rectangle;