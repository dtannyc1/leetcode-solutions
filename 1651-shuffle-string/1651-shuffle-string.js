/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let sol = new Array(s.length);
    for (let ii = 0; ii < indices.length; ii++) {
        sol[indices[ii]] = s.charAt(ii);
    }
    return sol.join("");
};