// Array Map Index
// When using map, we also get access to the position of the element in our function.

// [10, 20, 30].map(function(el, i) {
//     console.log(i);
// });
// This will log 0, 1, and 2 which are the indexes for 10, 20 and 30 respectively.

// One way that we can use the index is when we want to modify an element based on it's position.

//  Your Goal: Add 10 to the First 3 Players
// Let's modify our addScore function to only add 10 points to the first 3 players.

function addScore(players) {
    return players.map(
        (player) => ({
            id: player.id,
            score: players.indexOf(player) < 3 ? player.score + 10 : player.score
        }));
}

module.exports = addScore;