/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let output = new Array(nums.length);
    for (let ii = 0; ii < nums.length; ii++) {
        output[ii] = nums[nums[ii]];
    }
    return output;
};