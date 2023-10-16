/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    let sol = [1,1];

    for (let ii = 1; ii < rowIndex; ii++){
        let prevSol = sol.slice();
        for (let jj = 1; jj < sol.length; jj++){
            sol[jj] += prevSol[jj-1];
        }
        sol.push(1);
    }

    return sol;
};