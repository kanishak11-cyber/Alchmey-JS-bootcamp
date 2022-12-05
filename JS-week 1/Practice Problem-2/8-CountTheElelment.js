// Count the Elements
// Write a function countElements that takes in an array and returns an object a count of each element in the array.

// const elements = ["e", "k", "e", "z", "i", "z"];
// countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}


function countElements(elements) {

    const map = {};
    for (var i = 0; i < elements.length; i++) {
        map[elements[i]] = ~~map[elements[i]] + 1;
    }
    return map;
}


module.exports = countElements;