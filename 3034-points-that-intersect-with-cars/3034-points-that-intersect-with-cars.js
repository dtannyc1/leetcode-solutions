/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let dict = ({});
    for (let [starti, endi] of nums){
        while (starti <= endi){
            dict[starti] = true;
            starti += 1;
        }
    }
    return Object.keys(dict).length;
};