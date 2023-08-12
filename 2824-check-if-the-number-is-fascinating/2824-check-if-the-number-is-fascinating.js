/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let nums = ({});
    // let chars = (n.toString() + (2*n).toString() + (3*n).toString()).split("");
    for (let char of n.toString().split("")){
        if (char === '0' || nums[char]) {
            return false;
        } else {
            nums[char] = true;
        }
    }
    for (let char of (2*n).toString().split("")){
        if (char === '0' || nums[char]) {
            return false;
        } else {
            nums[char] = true;
        }
    }
    for (let char of (3*n).toString().split("")){
        if (char === '0' || nums[char]) {
            return false;
        } else {
            nums[char] = true;
        }
    }
    return true;
};