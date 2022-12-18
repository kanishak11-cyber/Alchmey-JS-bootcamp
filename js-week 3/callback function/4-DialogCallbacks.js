// Multiple Dialog Callbacks
// The rest of your development team loves the Dialog component! 

// They requested the ability to wire up multiple callbacks to the dialog closing. 

//  Your Goal: Accept Multiple Callback Functions
// Let's add the ability to wire up multiple callback functions.

// Each time onClose is called, we'll need to store an additional callback function on our dialog class. Once close is called, we'll invoke all of those callback functions.

//  This may require you to initialize an array on the Dialog class. If you need some place for initialization code, the constructor is a great place! Remember the constructor is called once, when a new instance is created.

//  Your Goal: Accept Multiple Callback Functions

class Dialog{
    constructor(){
        this.callbackFunction = [];
    }
    onClose(callbackFunction){
        this.callbackFunction.push(callbackFunction);
    }
    close(){
        this.callbackFunction.forEach(callbackFunction => callbackFunction());
    }
    
}