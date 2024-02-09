/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b) =>  a-b);
    let arr = new Array(nums.length).fill(1);
    let maxSize = 1, maxInd = 0;
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] % nums[j] === 0){
                arr[i] = Math.max(arr[i], arr[j]+1);
                if (arr[i] > maxSize){
                    maxSize = arr[i];
                    maxInd = i;
                }
            }
        }
    }
    
    let output = [];
    let currentNum = nums[maxInd];
    for (let i = maxInd; i >= 0; i--){
        if (currentNum % nums[i] === 0 && arr[i] === maxSize){
            output.push(nums[i]);
            currentNum = nums[i];
            maxSize--;
        }
    }
    return output;
};