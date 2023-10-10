/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    // just have to find the element which acts as the minimum
    // which has the most other elements within nums?
    
    // let set = new Set(nums);
    let uniq = Array.from(new Set(nums));

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

    let maxLen = 1;
    let right = 0; // keep track of right index
    for (let ii = 0; ii < uniq.length; ii++){ 
        right = findIdxOf(uniq[ii] + nums.length - 1, Math.max(right, ii), uniq.length-1);
        let max = right - ii + 1;
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