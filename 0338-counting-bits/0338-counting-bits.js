/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) return [0];

    // let sol = [0];
    // let list = [1];
    // let ind = 0;

    // while (sol.length <= n) {
    //     sol.push(list[ind]);
    //     ind++;
    //     if (ind === list.length){
    //         ind = 0;
    //         list = list.concat(list.map(val => val+1));
    //     }
    // }

    let sol = [0,1];
    let list = [1,2];
    let ind = 0;

    while (sol.length + list.length <= n) {
        // sol.push(list[ind]);
        // ind++;
        // if (ind === list.length){
        //     ind = 0;
        //     list = list.concat(list.map(val => val+1));
        // }
        sol = sol.concat(list);
        list = list.concat(list.map(val => val+1));
    }
    sol = sol.concat(list.slice(0, n + 1 - list.length))
    return sol;
};