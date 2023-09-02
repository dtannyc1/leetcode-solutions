/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let dp = new Array(s.length+1).fill(s.length+1);
    dp[0] = 0;
    for (let ii = 1; ii <= s.length; ii++){
        dp[ii] = dp[ii-1] + 1;
        for (let jj = 0; jj < ii; jj++){
            let str = s.substring(jj,ii);
            if (dictionary.includes(str)){
                dp[ii] = Math.min(dp[ii], dp[jj]);
            }
        }
    }
    return dp[dp.length-1];
};