// Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

// A palindrome is a word that is spelled the same forwards as it is backwards.

function isPalindrome(string) {
    let len = string.length
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;