/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    return l.map((start,i) => {
        return isArithmetic(nums.slice(start,r[i]+1));
    });
};

let isArithmetic = function(arr){
    if (arr.length <= 2) return true;
    arr.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    let diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++){
        if (arr[i] - arr[i-1] != diff) return false;
    }
    return true;
};