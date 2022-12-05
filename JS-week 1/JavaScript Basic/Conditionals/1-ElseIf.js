// Else If
// Let's imagine we want three behaviors based on two conditions. 

// We could use else and if together:

// if(firstCondition) {
//     // firstCondition is true
// }
// else if (otherCondition) {
//     // firstCondition is not true and otherCondition is true
// }
// else {
//     // neither condition is true
// }
//  If neither condition is true your function will default to the else statement.

//  What if both firstCondition and otherCondition are true? Let's take a closer look.

//  Your Goal: Return Equal
// Let's imagine we're building a website that requires users to have a subscription to access content. We want to encourage users to try it out so we add a free trial.

// Let's update the canAccess function to allow access if the user has either a subscription or a free trial.

// If either purchasedSubscription or freeTrial are true, return true. Otherwise return false.

function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription == true || freeTrial == true)    {
        return true
    }
        return false
    }
    
    module.exports = canAccess;