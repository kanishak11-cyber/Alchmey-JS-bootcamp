// Importing Files
// It's time to import our first file! Let's import the ORDER_TYPES we just created into numberOfPizzas.js.

// We can use require to pull in the exports from orderType.js:

// const ORDER_TYPES = require('./orderTypes');
//  Notice that there are now three file tabs. In this exercise we'll be modifying numberOfPizzas.js

//  Your Goal: Add Up Only Pizza Orders
// Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

// The orders will have a type keyword:

// const orders = [
//     { pizzas: 3, type: ORDER_TYPES.PIZZA },
//     { wings: 12, type: ORDER_TYPES.WINGS },
// ];
//  In this example we would only sum up pizzas from the first order!

// const totalPizzas = numberOfPizzas(orders);
// console.log( totalPizzas ); // 3

const ORDER_TYPES = {
    WINGS: 1,
    SALAD: 5,
    BURGER: 2,
    FRIES: 7, 
    PIZZA: 0, 
    
}

module.exports = ORDER_TYPES;