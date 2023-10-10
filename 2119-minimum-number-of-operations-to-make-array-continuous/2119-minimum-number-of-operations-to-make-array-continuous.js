/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    // just have to find the element which acts as the minimum
    // which has the most other elements within nums?
    // ie with [1,2,3,5,6], 1 is the minimum, [1,2,3,5] are considered valid, so return 5-4 = 1
    // let uniqFilter = function(val, idx, arr) {
    //     return arr.indexOf(val) === idx;
    // }
    // let uniq = nums.filter(uniqFilter);
    let set = new Set(nums);
    let uniq = Array.from(set);

    uniq.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let findIdxOf = function(target, left, right){
        if (left + 1 < uniq.length && uniq[left+1] > target) return left;
        if (uniq[right] < target) return right;

        while (left < right) {
            let midIdx = Math.floor((right + left)/2);
            if (uniq[midIdx] === target) {
                return midIdx;
            }
            else if (uniq[midIdx] < target){
                left = midIdx+1;
            } else {
                right = midIdx-1;
            }
        }
        if (uniq[left] > target) return left-1;
        return left;
    };

    //console.log(uniq)
    let maxLen = 1;

    // let output = findIdxOf(uniq[0] + nums.length - 1, 0, uniq.length-1);
    // [1,10,100,1000], target = 100 + 4 - 1 = 103, 2, 3
    let output = 0;
    for (let ii = 0; ii < uniq.length; ii++){ // [1,2,3,4] => for 1, search for 4
        // find where target = uniq[ii] + nums.length - 1 is via binary search
        output = findIdxOf(uniq[ii] + nums.length - 1, Math.max(output, ii), uniq.length-1);
        // while (uniq[right + 1] <= uniq[ii] + nums.length - 1 && right < uniq.length){
        //     right++;
        // }
        let max = output - ii + 1;
        //console.log(output, max)
        if (max > maxLen){
            maxLen = max;
        }
        if (maxLen > uniq.length - ii){
            break;
        }
    }
    
    return nums.length - maxLen;


    // // Sliding Window:
    // let set = new Set(nums);
    // let uniq = Array.from(set);

    // uniq.sort((a,b) => {
    //     if (a < b) return -1;
    //     if (a > b) return 1;
    //     return 0;
    // });

    // let maxLen = 1;
    // let right = 0;
    // for (let ii = 0; ii < uniq.length; ii++){ 
    //     while (uniq[right + 1] <= uniq[ii] + nums.length - 1 && right < uniq.length){
    //         right++;
    //     }
    //     let max = right - ii + 1;
    //     if (max > maxLen){
    //         maxLen = max;
    //     }
    //     if (maxLen > uniq.length - ii){
    //         break;
    //     }
    // }
    
    // return nums.length - maxLen;
};