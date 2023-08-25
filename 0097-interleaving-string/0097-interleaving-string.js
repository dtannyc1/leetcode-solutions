/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let memo = ({});

    let helper = (s1, s2, s3, index1 = 0, index2 = 0, index3 = 0) => {
        // different lengths false
        if (s3.length - index3 != s1.length + s2.length - index1 - index2) return false;
        // all empty true
        if (s3.length === index3 && s1.length === index1 && s2.length === index2) return true;
        // hit end of one string 
        if (s1.length === index1 && s2.substring(index2) != s3.substring(index3)) return false;
        if (s2.length === index2 && s1.substring(index1) != s3.substring(index3)) return false;
        if (s1.length === index1 || s2.length === index2) return true;

        // use memoization? 
        if (s1[index1] === s3[index3]) {
            if (memo[index1+1] && memo[index1+1][index2]) {
                // skip, already tried it
            }
            else if (helper(s1, s2, s3, index1+1, index2, index3+1)) {
                return true;
            }
            else {
                // save that we've tried it already
                if (memo[index1+1]){
                    memo[index1+1][index2] = true;
                } else {
                    memo[index1+1] = ({});
                    memo[index1+1][index2] = true;
                }
            }
        }
        if (s2[index2] === s3[index3]){
            if (memo[index1] && memo[index1][index2+1]) {
                // skip, already tried it
            }
            else if (helper(s1, s2, s3, index1, index2+1, index3+1)) {
                return true;
            }
            else {
                // save that we've tried it already
                if (memo[index1]){
                    memo[index1][index2+1] = true;
                } else {
                    memo[index1] = ({});
                    memo[index1][index2+1] = true;
                }
            }
        }
        
        return false;
    }
    return helper(s1,s2,s3);
};