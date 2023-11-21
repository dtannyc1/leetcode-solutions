/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let data = {};

    for (let num of nums){
        data[parseInt(num,2)] = true;
    }

    for (let i = 0; i < Math.pow(2, nums.length); i++){
        if (!data[i]){
            return i.toString(2).padStart(nums.length, '0');
        }
    }
};