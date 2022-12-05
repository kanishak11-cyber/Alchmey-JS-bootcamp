// Multiple Variables
// Just as we discussed in the last stage, JavaScript programs are run line-by-line. The line you created in the previous stage is called a statement.

// const a = 4;
// Notice how in my statement above, I added a semicolon (;) at the end. In JavaScript, most statements end with ;. I suggest you end all statements with a semi-colon, although in many cases JavaScript will automatically insert them.

// After the statement above, we can access a. We can also create another variable b and store in it the value from a:

// const a = 4;
// const b = a;
// After these two lines, both a and b will store the value 4.

//  Your Goal: Create two equal variables
// Create two variables a and b with the same value in each. Similar to the example above, you can first declare a and then set b equal to a.

const a = 4;
const b = a;

module.exports = { a, b }