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

    let totalTime = time.slice();
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
            return totalTime[ii-1];
        } else if (courseMap[ii].updated){
            return totalTime[ii-1];
        } else {
            let times = courseMap[ii].prevCourses.map((jj) => {
                return getUpdatedTime(jj);
            });
            let sum = time[ii-1];
            sum += Math.max(...times);
            totalTime[ii-1] = sum;
            courseMap[ii].updated = true;
            return sum;
        }
    }
    for (let [nextCourse, prevCourseObj] of Object.entries(courseMap)){
        getUpdatedTime(nextCourse);
    }
    return Math.max(...totalTime)
};