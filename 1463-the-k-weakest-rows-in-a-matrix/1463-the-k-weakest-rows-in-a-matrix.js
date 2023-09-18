/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let rowVals = [];
    // calculate values of each row
    for (let ii = 0; ii < mat.length; ii++){
        rowVals.push([ii, mat[ii].indexOf(0) === -1 ? mat[ii].length : mat[ii].indexOf(0)]);
    };

    // sort by values then indices
    rowVals.sort((a,b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[0] < b[0]) return -1;
        return 1;
    });

    return rowVals.slice(0,k).map(el => el[0]);

};