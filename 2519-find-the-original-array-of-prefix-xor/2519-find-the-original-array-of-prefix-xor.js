/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let output = [pref[0]];
    for (let ii = 1; ii < pref.length; ii++){
        output.push(pref[ii-1] ^ pref[ii]);
    }
    return output
};