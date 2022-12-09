// Create a Rectangle Shape
// Time to create the Rectangle. You'll find the definition already started for you in Rectangle.js!

//  Your Goal: Complete the Rectangle
// Complete the Rectangle function and link its prototype to Shape's prototype.

// This will be similar to our Circle! Rectangle will be a Shape plus a couple properties: height and width. We'll want to store these on the Rectangle instance.

// const rect = new Rectangle(0, 0, 20, 40);

// console.log(rect.x, rect.y); // 0, 0
// console.log(rect.height, rect.width); // 20, 40

Rectangle.prototype = Object.create(Shape.prototype);

function Rectangle(x, y, height, width) {
Shape.call(this, x, y);
this.height = height;
this.width = width;
}


module.exports = Rectangle;