/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // let table = {1: 1, 2: 2};

    // let helper = (m) => {
    //     if (table[m]) return table[m];
    //     else {
    //         table[m] = helper(m-1) + helper(m-2);
    //         return table[m];
    //     }
    // }
    // return helper(n);
    if (n === 1) return 1;
    if (n === 2) return 2;

    let ii = 2;
    let prev = 1;
    let cur = 2;

    while (ii < n){
        let tmp = cur;
        cur += prev;
        prev = tmp;
        ii++;
    }
    return cur;
};