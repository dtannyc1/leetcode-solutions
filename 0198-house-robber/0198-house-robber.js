/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // // recursive approach
    // // if num.length <= 2 return max of two
    
    // // otherwise nums[0] + func(rest) or nums[1] + func(rest+1)
    // if (nums.length <= 2) {
    //     return Math.max(nums);
    // }

    let house1 = 0;
    let house2 = 0;

    for (let num of nums){
        let house3 = Math.max(house1+num, house2);
        house1 = house2;
        house2 = house3;
    }
    
    return Math.max(house1, house2);
};

// [4,1,1,4]

// [5,8]