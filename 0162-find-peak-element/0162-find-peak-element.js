/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) { 
        return 0;
    } else if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return 0;
        } else {
            return 1;
        }
    }
    let midIdx = Math.floor(nums.length/2);
    if (nums[midIdx] > nums[midIdx-1] && nums[midIdx] > nums[midIdx+1]) {
        return midIdx;
    } else if (nums[midIdx] < nums[midIdx-1]){
        return findPeakElement(nums.slice(0, midIdx))
    } else {
        return midIdx + findPeakElement(nums.slice(midIdx))
    }
};