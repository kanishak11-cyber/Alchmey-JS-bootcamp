// Find the Number of Keys
// There are a couple of ways to get all the keys in an object.

// We can use the in operator to iterate over all properties:

// const object = { a: 1, b: 2, c: 3 }
// for(let key in object) {
//     console.log(key);
// }
// Over three iterations this will log a, b and c which are the keys of object.

// Additionally, we can use some methods on the Object constructor itself, which will return an array of the requested data:

// const object = { a: 1, b: 2, c: 3 }
// console.log( Object.keys(object) ); // ['a', 'b', 'c']
// console.log( Object.values(object) ); // [1, 2, 3]
//  There are actually quite a few methods on Object, you can find them all here.

//  Your Goal: Find the Number of Keys
// Given an object, find the number of keys inside the object. Return this number.

function numberOfKeys(object) {
  let count = 0;
  for (let key in object) {
    count++;
    console.log(Object.keys(object));
  }
  return count;
}

module.exports = numberOfKeys;
