/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    if (nums.length === 0) return true;
    if (nums.length === 1) return false;

    // keep track of all validSplits
    let validSplits2 = ({});
    let validSplits3 = ({});
    let toCheck2 = [2];
    let toCheck3 = [3];
    while (toCheck2.length || toCheck3.length){
        if (toCheck2.length){
            let ind = toCheck2.pop();
            if (nums[ind-1] === nums[ind-2]) {
                if (ind === nums.length) return true;
                else {
                    validSplits2[ind] = true;
                    if (!validSplits2[ind+2] && ind+2 <= nums.length) {
                        if (!toCheck2.includes(ind+2)) toCheck2.push(ind+2);
                    }
                    if (!validSplits3[ind+3] && ind+3 <= nums.length) {
                        if (!toCheck3.includes(ind+3)) toCheck3.push(ind+3)
                    }
                }
            }
        }
        if (toCheck3.length){
            let ind = toCheck3.pop();
            if (nums[ind-1] === nums[ind-2] && nums[ind-3] === nums[ind-2]) {
                if (ind === nums.length) return true;
                else {
                    validSplits3[ind] = true;
                    if (!validSplits2[ind+2] && ind+2 <= nums.length) {
                        if (!toCheck2.includes(ind+2)) toCheck2.push(ind+2);
                    }
                    if (!validSplits3[ind+3] && ind+3 <= nums.length) {
                        if (!toCheck3.includes(ind+3)) toCheck3.push(ind+3)
                    }
                }
            } else if (nums[ind-1] === nums[ind-2]+1 && nums[ind-3]+1 === nums[ind-2]){
                if (ind === nums.length) return true;
                else {
                    validSplits3[ind] = true;
                    if (!validSplits2[ind+2] && ind+2 <= nums.length) {
                        if (!toCheck2.includes(ind+2)) toCheck2.push(ind+2);
                    }
                    if (!validSplits3[ind+3] && ind+3 <= nums.length) {
                        if (!toCheck3.includes(ind+3)) toCheck3.push(ind+3)
                    }
                }
            }
        }
        // make sure toCheck2 and toCheck3 are unique!
    }
    return false;
};