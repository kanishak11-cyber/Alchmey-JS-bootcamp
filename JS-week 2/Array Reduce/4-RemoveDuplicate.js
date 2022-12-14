// Removing Duplicates
// We just learned about setting a number for our initial value in reduce.

// Can we do something similar for an object, like an array? Sure can! 

// In this code exercise, let's remove duplicates from an array.

//  Flip to details to check out an example.

//  Your Goal: Finish the function to remove all duplicates
// Use the example provided in the details tab to guide you. You'll want to provide an initial value here that will eventually lead you towards your goal. Then you'll continue to accumulate non-duplicate numbers until you have an array that is full of only unique numbers.

//  Curious how to find whether a value exists inside an array? Use the indexOf method: documentation.

function removeDuplicate(numbers){
    return numbers.reduce((accumulator, currentValue) => {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue)
        }
        return accumulator
    }, [])
}