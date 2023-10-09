/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // initialize solution [-1, -1]
    // look at middle value in nums
        // if num < target, recursive searchRange(right, target)
        // if num > target, recursive searchRange(left)
        // if num === target, 
    // if equal, then sol[0] if sol[0] === -1, sol[1] to be that index
    // when num > target, return sol
    
    let sol = [-1,-1];
    if (!nums.length) return sol;
    let midIdx = Math.floor(nums.length/2);
    if (nums[midIdx] > target) {
        return searchRange(nums.slice(0,midIdx), target);
    } else if (nums[midIdx] < target){
        let indices = searchRange(nums.slice(midIdx+1), target); // [0,0]
        if (indices[0] === -1) {
            return indices;
        } else {
            return indices.map(val => val + midIdx+1); //[4,4]
        }
    } else{
        let left = nums.slice(0, midIdx+1);
        let right = nums.slice(midIdx);
        
        sol[0] = findFirstOrLastInstance(left, target, true);
        sol[1] = findFirstOrLastInstance(right, target, false) + midIdx;
    }
    
    return sol;
};

var findFirstOrLastInstance = function(arr, target, first){
    // if first, looking for the index of first instance of target in arr
    // else looking for the index of the last instance of target in arr
    if (arr.length === 1){
        return 0;
    }
    let midIdx = Math.floor(arr.length/2);
    if (first && arr[midIdx] < target) {
        return findFirstOrLastInstance(arr.slice(midIdx), target, first) + midIdx;
    } else if (first && arr[midIdx] === target){
        if (arr.length === 2){
            if (arr[0] === target) {
                return 0;
            } else {
                return 1;
            }
        }
        return findFirstOrLastInstance(arr.slice(0,midIdx+1), target, first);
    } else if (!first  && arr[midIdx] > target) {
        return findFirstOrLastInstance(arr.slice(0,midIdx), target, first);
    } else {
        return findFirstOrLastInstance(arr.slice(midIdx), target, first) + midIdx;
    }
};