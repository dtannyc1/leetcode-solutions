/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let dict = ({});
    let output = 0;

    for (let num of nums){
        if (dict[num]){
            output += dict[num];
            dict[num]++;
        } else {
            dict[num] = 1;
        }
    }

    return output
};