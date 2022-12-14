// Grouping With Reduce
// Now it's time we get into some tricky cases. This is gonna be tough, so hang on to your hats! 

// Given an array of fruits in this format:

// [
//     { food: 'apple', type: 'fruit' }, 
//     { food: 'orange', type: 'fruit' }, 
//     { food: 'carrot', type: 'vegetable' }
// ]
// Let's turn it into an object with this format:

// { 
//      fruit: ['orange', 'apple'], 
//      vegetable: ['carrot'] 
// }
//  This object groups the fruits by their type. If someone had a fruit type, they could just provide it to the object as a key to get the fruits in a nice array.  

//  You will find yourself in situations from time to time where using reduce like this can really help you out.

//  Your Goal: Group by Type
// Finish the function group. Sort each food by it's type and return an object in the format shown above.

// Don't depend on the types to only be "fruit" and "vegetable". We will be testing for additional food types in the test cases, so no hardcoding string values!

//  For the initial value, think about what you want that final value to look like. In the last one stage we finished with an array, so we chose an initial value of [].

function group(food){
    return food.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue.type] === undefined) {
            accumulator[currentValue.type] = []
        }
        accumulator[currentValue.type].push(currentValue.food)
        return accumulator
    }
    , {})
}