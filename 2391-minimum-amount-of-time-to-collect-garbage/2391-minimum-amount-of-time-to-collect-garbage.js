/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let GTravelTime = 0; 
    let MTravelTime = 0;
    let PTravelTime = 0;

    let totalTime = 0;

    for (let ii = 0; ii < garbage.length; ii++){
        if (ii > 0){
            GTravelTime += travel[ii-1];
            MTravelTime += travel[ii-1];
            PTravelTime += travel[ii-1];
        }
        if (garbage[ii].indexOf('G') != -1){
            totalTime += GTravelTime;
            GTravelTime = 0;
        }
        if (garbage[ii].indexOf('M') != -1){
            totalTime += MTravelTime;
            MTravelTime = 0;
        }
        if (garbage[ii].indexOf('P') != -1){
            totalTime += PTravelTime;
            PTravelTime = 0;
        }
        totalTime += garbage[ii].length;
    }
    return totalTime;
};