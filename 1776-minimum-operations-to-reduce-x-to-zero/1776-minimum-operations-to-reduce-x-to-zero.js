/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    // find total sum of nums
    // remove smallest elements from center and subtract that from total sum
    // always look at sum - larger element, if a solution is found, save it!
    // if we shoot past x, impossible
    // otherwise, it's num.length - numRem
    // use pointers!

    let targetSubArrSum = nums.reduce((curTot, num) => curTot + num, 0) - x;
    let maxSubArrLen = 0;
    let left = 0;
    let curSum = 0;
    
    if (targetSubArrSum === 0) {
        return nums.length; // need to remove all elements
    } 

    for (let right = 0; right < nums.length; right++){
        curSum += nums[right];
        while (left <= right && curSum > targetSubArrSum){
            curSum -= nums[left];
            left++;
        }
        if (curSum === targetSubArrSum){
            maxSubArrLen = Math.max(maxSubArrLen, right - left + 1);
        }
    }

    return maxSubArrLen ? nums.length - maxSubArrLen : -1;
};