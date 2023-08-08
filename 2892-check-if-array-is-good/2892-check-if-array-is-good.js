/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = nums.length - 1;
    let count = new Array(n).fill(0);
    for (let num of nums){
        if (!count[num]) {
            if (num <= n && num > 0) {
                count[num] = 1;
            } else {
                return false;
            }
        } else {
            if (num === n && count[num] === 1){
                count[num] += 1;
            } else {
                return false;
            }
        }
    }
    return true;
};