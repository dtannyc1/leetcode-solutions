/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let arrLen = mountainArr.length();
    let memo = ({}); // store any get requests into memo
    // console.log(arrLen);
    let left = 0, right = arrLen-1, midIdx;
    let peakIdx;
    let found = false;

    // always store data into memo for each get to avoid repeated calls
    let checkMemo = function(idx){
        if (idx < 0) return -Infinity;
        if (idx >= arrLen) return -Infinity;
        if (memo[idx] === undefined){
            memo[idx] = mountainArr.get(idx);
        }
        return memo[idx];
    };

    // find peak via binary search
    while (!found){
        midIdx = Math.floor((left + right)/2);
        leftVal  = checkMemo(midIdx - 1);
        midVal   = checkMemo(midIdx);
        rightVal = checkMemo(midIdx + 1);
        // console.log(leftVal, midVal, rightVal);
        if (midVal > leftVal && midVal > rightVal){
            found = true;
            peakIdx = midIdx;
        } else if (midVal < leftVal){
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    } 

    // search left side for target
    left = 0; right = peakIdx;
    while (left <= right){
        midIdx = Math.floor((left + right)/2);
        if (checkMemo(midIdx) === target){
            return midIdx
        } else if (checkMemo(midIdx) < target){
            left = midIdx + 1;
        } else {
            right = midIdx -1;
        }
    }

    // search right side for target
    left = peakIdx; right = arrLen - 1;
    while (left <= right){
        midIdx = Math.floor((left + right)/2);
        if (checkMemo(midIdx) === target){
            return midIdx;
        } else if (checkMemo(midIdx) > target){
            left = midIdx + 1;
        } else {
            right = midIdx -1;
        }
    }

    // return -1 if not found;
    return -1;
};