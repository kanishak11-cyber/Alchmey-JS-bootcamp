// Edit Object Values
// Sometimes it's necessary to edit the values in an object!

// We can edit the value directly, similar to the syntax for retrieving values:

// const person = {
//     name: "James",
//     age: 22
// }

// person.name = "Sally";
// person["age"] = 30;

// console.log( person.name ); // Sally
// console.log( person.age ); // 30
//  Just like retrieval we can use the . or [] notation.

// We can also remove keys completely:

// const person = {
//     name: "Bob"
// }

// delete person.name;

// console.log( person.name ); // undefined
// He lost his own name. How sad

//  Your Goal: Remove the Secret Key
// The object passed into removeSecret has a secret key that must be removed!

// Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.
function removeSecret(object) {
  delete object.secret;
}

module.exports = removeSecret;
