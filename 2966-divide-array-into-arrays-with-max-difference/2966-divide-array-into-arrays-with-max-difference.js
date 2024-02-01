/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {

    // slow approach, O(nlogn)
    let sorted = nums.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    let output = [];
    while (sorted.length){
        if (sorted[2]-sorted[0] <= k){
            output.push(sorted.splice(0,3));
        } else {
            return [];
        }
    }
    return output;
};