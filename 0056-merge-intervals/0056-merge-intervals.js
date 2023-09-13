/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort by intervals[ii][0] left most value
    let sorted = intervals.sort((a,b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] === b[0]) return 0;
        return 1;
    });
    
    // iterate through intervals, keep track of highest rightmost value
    let curInterval = sorted[0];
    let output = [];
    for (let ii = 1; ii < intervals.length; ii++){
        if (intervals[ii][0] <= curInterval[1]){
            curInterval[1] = Math.max(curInterval[1], intervals[ii][1]);
        } else {
            output.push(curInterval);
            curInterval = intervals[ii];
        }
    }
    output.push(curInterval);
    return output;
};