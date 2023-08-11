/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // do two passes, one forward, one backwards
    // store data in two arrays, each storing product of everything left and right of the index
    // keep track of running product
    // after having both arrays, take product of two and put it in results array

    let left = [1];
    let prod = 1;
    for (let ii = 0; ii < nums.length - 1; ii++) {
        prod = prod * nums[ii];
        left.push(prod);
    }
    let right = [1];
    prod = 1;
    for (let ii = nums.length -1; ii > 0; ii--){
        prod = prod * nums[ii];
        right.push(prod);
    }

    let result = [];
    for (let ii = 0; ii < nums.length; ii++){
        result.push(left[ii] * right[nums.length - 1 - ii])
    }
    return result;
};