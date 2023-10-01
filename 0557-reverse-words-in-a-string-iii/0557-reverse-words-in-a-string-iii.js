/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    words = words.map(word => {
        return word.split("").reverse().join("")
    });
    return words.join(" ");
};