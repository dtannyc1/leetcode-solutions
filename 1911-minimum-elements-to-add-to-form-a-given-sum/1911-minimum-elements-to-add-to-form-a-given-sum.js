/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    let curSum = 0;
    for (let ii = 0; ii < nums.length; ii++) {
        curSum += nums[ii];
    }
    return Math.ceil(Math.abs(goal - curSum) / limit)
};