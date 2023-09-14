/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // let inds = [0];
    // let checked = ({});
    // while (inds.length > 0){
    //     let curInd = inds.shift();
    //     if (!checked[curInd]){
    //         checked[curInd] = true;
    //         if (curInd + nums[curInd] >= nums.length-1) return true;
    //         for (let jj = nums[curInd]; jj > 0; jj--){
    //             inds.push(curInd + jj);
    //         }
    //     }
    // }
    // return false;

    if (nums.length === 1) return true;
    let maxDist = 0;
    for (let ii = 0; ii < nums.length; ii++){
        if (ii > maxDist) return false;
        maxDist = Math.max(maxDist, ii+nums[ii]);
        if (maxDist >= nums.length-1) return true;
    }

};