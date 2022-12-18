// Your Goal: Retrieve the Primary Value
// Given an object that has an arbitrary nesting level, find the value!

// The value may be deeply nested inside the object:

// {
//     prop: {
//         prop: {
//             prop: 3
//         }
//     }
// }
// Or it may not:

// {
//     prop: 3
// }
//  In either scenario above, your goal would be to retrieve the value 3.

// Each object will only contain 1 key prop and the associated value will either be an object or a primary value (string, boolean or number). If the value is an object, it will contain a prop attribute.

// This will continue until eventually the prop attribute for a nested object will contain a string, boolean, or a number.

//  The typeof operator may be quite useful for this challenge.

function deepRetrieve(obj) {
  while (typeof obj.prop === 'object') {
    obj = obj.prop;
  }
  return obj.prop;
}