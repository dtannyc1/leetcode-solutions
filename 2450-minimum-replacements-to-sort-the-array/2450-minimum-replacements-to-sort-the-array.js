/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    // iterate from second to last element down to first
    // if jj > jj+1, split
        // split involves repeatedly removing nums[jj+1] if nums[jj]> 2*[jj+1]
        // split remainder so they're as big as possible?
        // maybe make a helper function that deals with the split

    let curMax = nums[nums.length-1];
    let splits = 0;
    for (let jj = nums.length-2; jj >= 0; jj--){
        if (nums[jj] > curMax){
            let [numSplits, minVal] = helper(nums[jj], curMax);
            splits += numSplits;
            curMax = minVal;
        } else {
            curMax = nums[jj];
        }
    }
    return splits;
};

let helper = function(num, targetMax) { // 13 / 5
    // let numSplits = 1; // 2
    // while (targetMax * (numSplits+1) < num){ // 3 * 3 <= 9
    //     numSplits += 1;
    // }
    // let minVal = targetMax; // 4
    // while (true){
    //     if (num - numSplits * minVal >= minVal) { // 13 - 2 * 4 = 5 >= 4
    //         break;
    //     } else {
    //         minVal -= 1;
    //     }
    // } // 4 4 5

    // targetMax * (numSplits+1) < num
    // numSplits+1 < num/targetMax
    // 

    let numSplits = Math.ceil(num/targetMax) - 1;
    let minVal = Math.floor(num/(numSplits+1));

    // num - (numSplits+1) * minVal >= 0
    // num / (numSplits+1) >= minVal

    return [numSplits, minVal];
}