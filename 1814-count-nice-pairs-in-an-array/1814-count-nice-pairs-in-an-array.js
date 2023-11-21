/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    // nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])
    // so store each nums[i] - rev(nums[i]) in a dict
    // if nums[i] - rev(nums[i]) already exists, then add a pair
    //      and increment value in dict? 
    //      what if we already found 2 values? add one for each

    let output = 0;
    let dict = {};
    for (let num of nums){
        let val = num-parseInt(num.toString().split("").reverse().join(""));
        if (dict[val]){
            output += dict[val];
            dict[val]++;
        } else {
            dict[val] = 1;
        }
    }
    return output % (Math.pow(10,9)+7);
};