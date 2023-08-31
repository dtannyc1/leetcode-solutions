/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    // iterate through ranges
        // store intervals based on ii and ranges[ii]

    // sort intervals based on interval[ii][0]
    // iterate through intervals
        // search for anything that includes target point
        // among all of the options, choose the one that has the highest interval[ii][1]
        // add 1 to num taps on
        // move target point to interval[ii][1]+1
        // if target point is > n, return numTapsOn
        // else keep going

    let intervals = [];
    for (let ii = 0; ii < ranges.length; ii++){
        intervals.push([ii - ranges[ii], ii + ranges[ii]]);
    }

    intervals.sort((a,b) => {
        if (a[0] < b[0]){
            return -1;
        } else if (a[0] === b[0]) {
            return 0;
        } else {
            return 1;
        }
    });

    // console.log(intervals)

    let numTapsOn = 0;
    let targetSpot = 0.5;
    while (true){
        let found = false;
        let curMax = 0;
        let newTargetSpot = 0;
        for (let ii = 0; ii < intervals.length; ii++){
            if (intervals[ii][0] < targetSpot){
                if (intervals[ii][1] > targetSpot){
                    found = true;
                    if (intervals[ii][1] > curMax){
                        curMax = intervals[ii][1]; // find right most option
                        newTargetSpot = intervals[ii][1] + 0.5;
                        if (newTargetSpot > n) {
                            return numTapsOn + 1;
                        }
                    }
                }
            } else {
                break;
            }
        }
        if (!found) return -1;
        else {
            numTapsOn += 1;
            targetSpot = newTargetSpot;
        }
    }
};