/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let counter = ({});
    let sols = {maxCount: 0, maxKey: null}
    for (let ii = 0; ii < nums.length; ii++) {
        if (!counter[nums[ii]]) {
            counter[nums[ii]] = {count: 1, start: ii, end: ii}
            if (sols.maxCount === 0) {
                sols.maxCount = 1;
                sols.maxKey = nums[ii];
            }
        } else {
            counter[nums[ii]].count += 1;
            counter[nums[ii]].end = ii;

            if (counter[nums[ii]].count > sols.maxCount) {
                sols.maxCount = counter[nums[ii]].count;
                sols.maxKey = nums[ii];
            } else if (counter[nums[ii]].count === sols.maxCount) {
                // more than one option
                // sols.maxKey.push(nums[ii])
                if (counter[nums[ii]].end - counter[nums[ii]].start + 1 < 
                    counter[sols.maxKey].end - counter[sols.maxKey].start + 1) {
                        sols.maxKey = nums[ii];
                    }
            }
        }
    }

    // let ans = [];
    // for (let ii = 0; ii < sols.maxKey.length; ii++) {
    //     let key = sols.maxKey[ii];
    //     ans.push(counter[key].end-counter[key].start+1);
    // }
    
    return counter[sols.maxKey].end - counter[sols.maxKey].start+1
};