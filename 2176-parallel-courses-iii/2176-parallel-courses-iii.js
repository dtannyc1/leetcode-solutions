/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    // traverse through graph
    // for each course
        // if it has a prereq, its completion time is its own time plus all the prereqs
        // if it doesnt, it's just its own time.
    // return maximum totalTime

    // make a dict of {nextcourse: {prevCourses: [], totalTime: null}}}
    // use map to calculate [totalTime]

    let totalTime = new Array(n);
    let courseMap = ({});
    for (let [prev, next] of relations){
        if (courseMap[next]){
            courseMap[next].prevCourses.push(prev);
        } else {
            courseMap[next] = {prevCourses: [prev]};
        }
    }

    let getUpdatedTime = function(ii){
        if (!courseMap[ii]){
            totalTime[ii-1] ||= time[ii-1];
            return totalTime[ii-1];
        } else if (totalTime[ii-1]){
            return totalTime[ii-1];
        } else {
            let sum = time[ii-1];
            let maxTimePrev = 0;
            for (let prevCourse of courseMap[ii].prevCourses){
                let tmpTime = getUpdatedTime(prevCourse);
                maxTimePrev = Math.max(maxTimePrev, tmpTime);
            }
            sum += maxTimePrev;
            totalTime[ii-1] = sum;
            return sum;
        }
    }

    let maxTime = -Infinity;
    for (let ii = 1; ii <= n; ii++){
        let tmpTime = getUpdatedTime(ii);
        maxTime = Math.max(maxTime, tmpTime);
    }
    return maxTime;
};