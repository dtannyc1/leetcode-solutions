/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let ii = 1;
    while (ii < s.length){
        if (s.length % ii === 0) {
            let sub = s.substring(0,ii);
            if (sub.repeat(s.length / ii) === s){
                return true;
            }
        }
        ii++;
    }
    return false;
};