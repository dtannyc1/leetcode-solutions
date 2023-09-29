/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc = false, dec = false;
    for (let ii = 1; ii < nums.length; ii++){
        if (nums[ii] > nums[ii-1]) {
            inc = true;
            if (dec) return false;
        } else if (nums[ii] < nums[ii-1]){
            dec = true;
            if (inc) return false;
        }
    }
    return true;
};