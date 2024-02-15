/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    
    let bestSum = -1;
    let curSum = 0;
    let numSides = 0;
    
    for (let num of sorted){
        curSum += num;
        numSides++;
        if (curSum-num > num && numSides >= 3){
            bestSum = curSum;
        }
    }
    
    return bestSum;
};