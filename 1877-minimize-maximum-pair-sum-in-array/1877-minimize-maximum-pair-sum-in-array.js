/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let maxPairSum = 0;
    for (let i=0; i < nums.length/2; i++){
        let sum = nums[i] + nums[nums.length-1-i];
        if (sum > maxPairSum) maxPairSum = sum;
    }
    return maxPairSum;
};