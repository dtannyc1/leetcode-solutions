/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let dict = ({});
    for (let ii = 0; ii < s.length; ii++){
        if (!dict[s.charAt(ii)]) dict[s.charAt(ii)] = [ii];
        else dict[s.charAt(ii)].push(ii);
    }

    for (let jj = 0; jj < t.length; jj++){
        if (!dict[t.charAt(jj)] || dict[t.charAt(jj)].length === 0) return t.charAt(jj);
        dict[t.charAt(jj)].pop();
    }

    return null
};