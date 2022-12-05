// Strings
// Now let's introduce a new primary type called String! Another weird name, huh? Strings are a bunch of characters (think a, b, c) put together. Like a message!

// const a = "Hello!";
// In JavaScript, we have three ways to define a string. Here are the first two:

// const myName = "Dan";
// const anotherName = 'Cody';
// Here you can see that myName and anotherName use different types of quotes, double and single. These quotes are interchangeable. Feel free to use either! You can also use them inside each other.

// Let's look at one other way to declare a string:

// const helloMessage = `Hello ${anotherName}, my name is ${myName}!`;
// This variable helloMessage uses backticks. With backticks you can interpolate or add values inside your string. That is what the ${variable} syntax is all about. Here we are taking the values out of anotherName and myName and placing them in the string. Using the values from the previous example, helloMessage now contains "Hello Cody, my name is Dan!".

//  Your Goal: Hello World
// In the variable a is stored the value "World". Your task is to store "Hello World" in the variable b.

const a = "World";
const b = "Hello World"

module.exports = { a,b }