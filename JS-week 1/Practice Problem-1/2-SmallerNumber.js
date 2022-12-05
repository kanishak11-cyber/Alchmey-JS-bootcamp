// Your Goal: Return Smaller
// The function smallerNumber will be given two unequal numbers: num1 and num2.

// Your goal is to find the smaller number and return it!

// Example Usage:

// console.log( smallerNumber(3, 5) ); // 3

function smallerNumber(num1, num2) {
    if (num1> num2){
        return num2
    }
    else return num1
}

module.exports = smallerNumber;