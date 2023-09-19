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

    // // Pure math approach: sum - n(n+1)/2 -> only works for one repeat
    // let sum = nums.reduce((part, num) => part + num, 0);
    // let n = nums.length-1;
    // return sum - n*(n+1)/2;
};