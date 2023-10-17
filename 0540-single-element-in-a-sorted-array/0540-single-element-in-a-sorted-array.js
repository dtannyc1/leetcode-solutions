/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    // [1]
    // [1,1,2,2,3]
    // [1,2,2,3,3]

    // [3,3,7,7,10,11,11]
    let left = 0, right = nums.length-1; //  left = 3, right = 4
    while (left < right){
        let midIdx = Math.floor((left+right)/2); // 4
        if ((midIdx - left) % 2 === 0) {
            midIdx--;
        }
        let val = nums[midIdx];
        if (nums[midIdx-1] != val && nums[midIdx+1] != val){
            return val;
        } else {
            if (val === nums[midIdx-1]){
                left = midIdx+1;
            } else {
                right = midIdx-1;
            }
        }
    }

    if (nums[left] != nums[left-1] && nums[left] != nums[left+1]){
        return nums[left];
    } else {
        return nums[right];
    }
};