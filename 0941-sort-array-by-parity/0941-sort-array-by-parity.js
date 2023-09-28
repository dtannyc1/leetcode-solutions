/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evens = [], odds = [];
    for (let num of nums){
        if (num % 2 === 0){
            evens.push(num);
        } else {
            odds.push(num);
        }
    }
    return evens.concat(odds);
};