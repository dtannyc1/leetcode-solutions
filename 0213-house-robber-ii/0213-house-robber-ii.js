/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // keep track of whether or not the 1st is kept

    let house1 = 0;
    let house2 = 0;
    let keep1 = false, keep2 = false;
    let house4 = 0;
    let house5 = 0

    for (let ii = 0; ii < nums.length; ii++){
        let house3, house6, keep3;
        if (ii < nums.length-1){
            if (house1 + nums[ii] > house2){
                house3 = house1 + nums[ii];
                if (ii === 0){
                    keep3 = true;
                } else {
                    keep3 = keep1;
                }
            } else {
                house3 = house2;
                keep3 = house2;
            }
            house1 = house2;
            house2 = house3;
            keep1 = keep2;
            keep2 = keep3;
        } else if (!keep1){
            house3 = Math.max(house1 + nums[ii], house2);
            house1 = house2;
            house2 = house3;
        }
        if (ii > 0){
            house6 = Math.max(house4 + nums[ii], house5);
            house4 = house5;
            house5 = house6;
        }
    }
    return Math.max(house1, house2, house4, house5)
};