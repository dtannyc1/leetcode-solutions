/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let table = {1: 1, 2: 2};

    let helper = (m) => {
        if (table[m]) return table[m];
        else {
            table[m] = helper(m-1) + helper(m-2);
            return table[m];
        }
    }
    return helper(n);
};