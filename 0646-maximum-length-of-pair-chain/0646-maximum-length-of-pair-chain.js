/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]); // sort by second value

    let cur = null, ans = 0;

    for (let [start, end] of pairs){
        if (cur === null || cur < start) {
            cur = end;
            ans++;
        }
    }
    return ans;
};