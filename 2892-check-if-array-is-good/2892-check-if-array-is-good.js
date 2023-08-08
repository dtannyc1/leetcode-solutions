/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let count = new Array(nums.length - 1).fill(0);
    for (let ii = 0; ii < nums.length; ii++){
        if (!count[nums[ii]]) {
            if (nums[ii] <= nums.length - 1 && nums[ii] > 0) {
                count[nums[ii]] = 1;
            } else {
                return false;
            }
        } else {
            if (nums[ii] === nums.length - 1 && count[nums[ii]] === 1){
                count[nums[ii]] += 1;
            } else {
                return false;
            }
        }
    }
    return true;
};