/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    if (n === 0) return 0;
    // // brute force:
    // let solArr = new Array(n).fill(false);
    // for (let ii = 1; ii <= n; ii++){
    //     for (let jj = 0; jj < n; jj++){
    //         if ((jj+1) % ii === 0){
    //             solArr[jj] = !solArr[jj]; // flip
    //         }
    //     }
    // }
    // let num = 0;
    // for (let ii = 0; ii < n; ii++){
    //     if (solArr[ii]) num++;
    // }
    // return num;
    return Math.floor(Math.sqrt(n));
};