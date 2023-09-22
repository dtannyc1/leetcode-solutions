/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;

    for (let ii = 0; ii < t.length; ii++){
        if (s.charAt(0) === t.charAt(ii)){
            return isSubsequence(s.substring(1), t.substring(ii+1));
        }
    }

    return false;
};