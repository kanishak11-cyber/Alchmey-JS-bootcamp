// Then and Catch
// Let's build our own Promise Library called Pact. 

// As you can see in your Pact.js file, we've started you out with a Pact class.

//  Your Goal: Add the Methods
// Your first task is to create two class methods catch and then. These methods are used by promises to wire up callbacks.

//  See examples of how these methods will be used in details.

// To pass the assertions in testPact.js, you'll simply need to create the class methods catch and then on your Pact class. There is no need to implement any functionality just yet!

class Pact {
    // add methods to return on the instance
    catch() {
        return this;
    }
    then() {
        return this;
    }
}