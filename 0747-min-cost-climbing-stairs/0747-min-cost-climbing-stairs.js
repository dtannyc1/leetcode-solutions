/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCosts = new Array(cost.length).fill(0);
    minCosts[minCosts.length-1] = cost[cost.length-1];
    minCosts[minCosts.length-2] = cost[cost.length-2];
    for (let ii = cost.length-3; ii >= 0; ii--){
        minCosts[ii] = Math.min(minCosts[ii+1], minCosts[ii+2]) + cost[ii];
    }
    // console.log(minCosts)
    return Math.min(minCosts[0], minCosts[1])
};