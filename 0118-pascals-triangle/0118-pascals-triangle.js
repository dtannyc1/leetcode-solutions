/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1,1]];

    let output = [[1], [1,1]];
    while (output.length < numRows){
        let lastRow = output[output.length-1];
        let nextRow = lastRow.slice(0);
        for (let ii = 1; ii < nextRow.length; ii++){
            nextRow[ii] += lastRow[ii-1];
        }
        nextRow.push(1);
        output.push(nextRow);
    }
    return output;
};