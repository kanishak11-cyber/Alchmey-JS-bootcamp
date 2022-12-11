// 2: Only True
//  Your Goal: Only True
// We can apply the same filtering logic to booleans.

// Given an array of booleans, keep only the true values:

// Only True

function onlyTrue(array) {
    const trueArray = array.filter(n => n === true)
    return trueArray
}