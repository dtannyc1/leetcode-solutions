/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let output = new Set();
    let dict = ({});
    let minCount = nums.length/3;

    for (let num of nums){
        if (!dict[num]){
            dict[num] = 1;
        } else {
            dict[num]++;
        }

        if (dict[num] > minCount){
            output.add(num)
        }
    }

    return Array.from(output);
};