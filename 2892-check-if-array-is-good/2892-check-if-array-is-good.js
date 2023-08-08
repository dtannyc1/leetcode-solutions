/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let count = ({});
    let n = nums.length - 1;
    for (let ii = 0; ii < nums.length; ii++){
        if (!count[nums[ii]]) {
            if (nums[ii] <= n && nums[ii] > 0) {
                count[nums[ii]] = 1;
            } else {
                return false;
            }
        } else {
            if (nums[ii] === n && count[nums[ii]] === 1){
                count[nums[ii]] += 1;
            } else {
                return false;
            }
        }
    }
    return true;
};