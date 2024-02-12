/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // easy way: keep dict, return once a number appears more than n/2 times
    let dict = {};
    for (let num of nums){
        dict[num] ||= 0;
        dict[num]++;
        if (dict[num] > nums.length/2){
            return num;
        }
    }
};