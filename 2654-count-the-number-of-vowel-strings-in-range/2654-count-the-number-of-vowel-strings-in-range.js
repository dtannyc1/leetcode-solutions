/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let ii = left; ii <= right; ii++) {
        if (vowels.some(vl => vl === words[ii].charAt(0)) 
            && vowels.some(vl => vl === words[ii].charAt(words[ii].length-1))) {
                count += 1;
            }
    }
    return count;
};