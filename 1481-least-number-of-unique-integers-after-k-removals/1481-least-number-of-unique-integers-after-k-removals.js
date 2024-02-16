/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let count = {};
    for (let num of arr){
        count[num] ||= 0;
        count[num]++;
    }
    let sorted = Object.keys(count).sort((a,b) => count[a] - count[b]);
    let ind = 0;
    while (k > 0){
        count[sorted[ind]]--;
        if (count[sorted[ind]] === 0){
            ind++;
        }
        k--;
    }
    return sorted.length-ind;
};