// Enumerated Types
// Code is more readable and mantainable when numbers are defined.

// Take the following example:

// const card = {
//     suit: 1,
//     value: 5
// }
// What is this card's suit? We know the value is 1, but what does that mean?

// Let's define CARD_SUITS:

// const CARD_SUITS = {
//     DIAMONDS: 0,
//     HEARTS: 1,
//     SPADES: 2,
//     CLUBS: 3
// }
// Using this object we can clearly label our card suit:

// const card = {
//     suit: CARD_SUITS.HEARTS,
//     value: 5
// }
// The value of the suit would still be 1, however this clearly defines what that suit means in its definition!

// Also, if we ever want to change what suit corresponds to which value, we only need to change it once in CARD_SUITS.

//  This type of object is commonly referred to as an Enumeration. As with any pre-defined constant, it's common to use UPPER_SNAKE_CASE for enumerations in JavaScript.

//  Your Goal: Create an Enumeration
// Let's create an enumeration like CARD_SUITS above. Our enumeration will be named ORDER_TYPES and describe the different types of orders that are possible in our system.

// The first type should be PIZZA, with a value of 0.

// After that, create at least 2 more options of your choice!

//  Get creative! Some ideas for other choices: WINGS, SALAD, BURGER, FRIES, SANDWICH.

const ORDER_TYPES = {
  WINGS: 1,
  SALAD: 5,
  BURGER: 2,
  FRIES: 7,
  PIZZA: 0,
};

module.exports = ORDER_TYPES;
