// Player Hand Score
// The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

// The cards are represented by the first letter in the name of the card:

// A "K" is 4 points
// A "Q" is 3 points
// A "J" is 2 points
// Example Usage:

// console.log( playerHandScore("K") ); // 4
// console.log( playerHandScore("KJ") ); // 6
// console.log( playerHandScore("KQQ") ); // 10 


function playerHandScore(hand) {

    let count = 0
    console.log(hand)

    for (let i = 0; i < hand.length; i++) {
        if (hand[i] == 'K' || hand[i] == 'k') {
            count += 4
        }
        else {
            if (hand[i] == 'Q' || hand[i] == 'q') {
                count += 3
            }
            if (hand[i] == 'j' || hand[i] == 'J') {
                count += 2
            }

        }
    }
    console.log(count)
    return count
}

module.exports = playerHandScore;