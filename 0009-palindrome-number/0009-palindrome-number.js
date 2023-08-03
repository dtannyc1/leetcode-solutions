/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // take string form of integer
    // iterate through the length to make sure each element is the same as its mirror
    let str = x.toString();
    for (let ii = 0; ii < str.length/2; ii++){
        if (str[ii] != str[str.length-1-ii]) {
            return false;
        }
    }
    return true;
};