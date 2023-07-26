/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    for (let ii = left; ii <= right; ii++) {
        if (['a', 'e', 'i', 'o', 'u'].some(vl => vl === words[ii].charAt(0)) 
            && ['a', 'e', 'i', 'o', 'u'].some(vl => vl === words[ii].charAt(words[ii].length-1))) {
                count += 1;
            }
    }
    return count;
};