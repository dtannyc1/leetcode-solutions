/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let data = new Array(nums.length).fill(0);

    for (let num of nums){
        if (data[num]) return num;
        data[num] = true;
    }
};