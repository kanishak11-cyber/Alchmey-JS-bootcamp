// Retrieve Values
// OK, awesome! It's time to retrieve values from our object.

// In the last stage, we created an object with keys and values:

// const team = {
//     name: "Mets",
//     wins: 86,
//     inPlayoffs: false,
// };
// The key name corresponds to the string "Mets".

// If we wanted to retrieve the name of the team, we can do this in two ways:

// console.log( team.name ); // Mets
// console.log( team['name'] ); // Mets
// We can use the . property accessor operator or we can use brackets [] just like with arrays!

//  You can even supply a variable in the brackets []!

//  Your Goal: Find the Number of Pizzas
// Find the number of pizzas in an order object.

// The object will look like this:

// const order = {
//     pizzas: 3,
//     extraCheese: true,
//     deliveryInstructions: "Round the back, please!",
// };
//  The function should take this order and retrieve the number of pizzas:

// const totalPizzas = numberOfPizzas(order);
// console.log( totalPizzas ); // 3

function numberOfPizzas(order) {
    console.log(order.pizzas)
    return order.pizzas 
}

module.exports = numberOfPizzas;