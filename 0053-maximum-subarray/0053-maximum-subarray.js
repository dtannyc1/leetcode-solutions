/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let curMax = nums[0]
    // let curSum = nums[0]
    // if curSum < 0, set it to 0
    // iterate through nums
        // add next num to curSum
        // if > curMax, set curMax = curSum
        // if curSum < 0, set it to 0
    // return curMax
    // [-1, -2]
    let curMax = nums[0]; // curMax: -1
    let curSum = nums[0]; // curSum: 0
    if (curSum < 0) curSum = 0;

    for (let ii = 1; ii < nums.length; ii++){
        curSum += nums[ii];
        if (curSum > curMax) curMax = curSum;
        if (curSum < 0) curSum = 0;
    }
    return curMax;
};