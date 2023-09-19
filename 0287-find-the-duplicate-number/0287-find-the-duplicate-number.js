/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let data = ({});

    for (let num of nums){
        if (data[num]) return num;
        data[num] = true;
    }
};