// Count Vowels
// Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".

// Handle lowercase and uppercase vowels.

function countVowels(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'A'
            || str[i] == 'e' || str[i] == 'E'
            || str[i] == 'i' || str[i] == 'I'
            || str[i] == 'o' || str[i] == 'O'
            || str[i] == 'u' || str[i] == 'U') {
            count++

        }
    }
    return count
}

module.exports = countVowels;