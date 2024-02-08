/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // // greedy approach:
    // // subtract biggest possible from n, repeat
    // let maxInt = Math.floor(Math.sqrt(n));
    // let output = 0;
    // while (n > 0){
    //     while (Math.pow(maxInt,2) > n){
    //         maxInt--;
    //         if (maxInt <= 0){
    //             maxInt = 1;
    //             break;
    //         }
    //     }
    //     n -= Math.pow(maxInt,2);
    //     output++;
    // }
    // return output;
    
    // work up from 1, find the optimal amount for each number
    let sols = new Array(n+1).fill(Infinity);
    sols[0] = 0;
    for (let i = 1; i <= n; i++){
        for (let j = 1; j*j <= i; j++){
            sols[i] = Math.min(sols[i], sols[i - j*j] + 1);
        }
    }
    return sols[n];
};