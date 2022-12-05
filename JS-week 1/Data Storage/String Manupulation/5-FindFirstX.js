// Index Of
// We learned how to look up a character by index. Now it's time to find the index of a specific string!

// There is a method on strings called indexOf that will help us find the first index of a string. Let's see this in action:

// "Hello".indexOf("e"); // 1
// "abca".indexOf("a"); // 0 
// "abc".indexOf("q"); // -1 
// "happy dog bark".indexOf("dog"); // 6
// We can look up the index of single-characters as well as full strings!

// If the index is not found, indexOf will return a -1.

//  Although not as often used, it is interesting to note that there is also a lastIndexOf function on strings. This works as expected, it finds the last occurrence of the string and returns its index. See the Documentation.

//  Your Goal: Find the First X
// In the string argument find the index of the first lower-case "x" and return it.

function findFirstX(string) {
    console.log(string.indexOf('x'))
    return    string.indexOf('x')
}

module.exports = findFirstX;