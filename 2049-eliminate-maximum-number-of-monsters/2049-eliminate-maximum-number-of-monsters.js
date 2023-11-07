/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    // get a list of times at which the monsters would kill the player
    let endTimes = dist.map((loc,ii) => Math.ceil(loc/speed[ii]));
    endTimes.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let i;
    for (i = 0; i < endTimes.length; i++){
        if (endTimes[i] < i+1){
            break;
        }
    };
    return i;

};