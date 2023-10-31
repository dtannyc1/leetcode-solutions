/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let output = pref.slice();
    for (let ii = 1; ii < output.length; ii++){
        output[ii] = pref[ii-1] ^ output[ii];
    }
    return output
};