// Math Floor
// Now we're going to discuss another useful Math function Math.floor! Unlike Math.random, Math.floor will take an argument:

// const two = Math.floor(2.2598223);
// This function will take 2.2598223 and return 2. The function will round a number down to the nearest integer. For example if we had the number, 2.9999, the function will round this input down to 2.

//  Your Goal: Complete the getFloor function
// Take the argument x and use Math.floor to turn it into an integer without the values after the decimal place.

// Once you have this floored value, return it!

function getFloor(x) {
    const roundNum = Math.floor(x)    
    return roundNum;
}

module.exports = getFloor;