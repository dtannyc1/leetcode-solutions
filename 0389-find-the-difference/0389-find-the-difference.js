/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let dict = ({});
    for (let ii = 0; ii < s.length; ii++){
        if (!dict[s.charAt(ii)]) dict[s.charAt(ii)] = 1;
        else dict[s.charAt(ii)]++;
    }

    for (let jj = 0; jj < t.length; jj++){
        if (!dict[t.charAt(jj)]) return t.charAt(jj);
        dict[t.charAt(jj)]--;
    }

    return null
    // let sArr = s.split("").sort();
    // let tArr = t.split("").sort();
    // for (let ii = 0; ii < sArr.length; ii++){
    //     if (sArr[ii] != tArr[ii]){
    //         return tArr[ii];
    //     }
    // }
    // return tArr[tArr.length-1];
};