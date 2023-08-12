/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let nums = ({});
    let chars = (n.toString() + (2*n).toString() + (3*n).toString()).split("");
    for (let char of chars){
        if (char === '0' || nums[char]) {
            return false;
        } else {
            nums[char] = true;
        }
    }
    return true;
};