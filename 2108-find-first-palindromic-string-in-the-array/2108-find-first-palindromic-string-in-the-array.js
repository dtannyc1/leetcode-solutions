/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let word of words){
        if (isPalindrome(word)){
            return word;
        }
    }
    return "";
};

let isPalindrome = function(word){
    for (let i = 0; i < Math.floor(word.length/2); i++){
        if (word.charAt(i) != word.charAt(word.length-i-1)){
            return false;
        }
    }
    return true;
}