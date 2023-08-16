/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) return [0];
    if (n === 1) return [0,1];
    if (n === 2) return [0,1,1];
    let sol = [0,1,1];
    let list = [1,2];
    let ind = 1;
    // let nextPow = 2;
    // let i = 2;
    // let even = true;

    while (sol.length <= n) {
        // i++;
        // even = !even;
        // if (i === 2 ** nextPow){
        //     ind = 0;
        //     nextPow++;
        //     list = list.concat(list.map(val => val+1));
        // }
        sol.push(list[ind]);
        ind++;
        if (ind === list.length){
            ind = 0;
            list = list.concat(list.map(val => val+1));
        }
    }
    return sol;
};