/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    // split flowers into two arrays -> start days and end days
    // sort both
    // for each person, map to startii - endii to get actual number of flowers

    let starts = flowers.map(blooms => blooms[0]);
    let ends = flowers.map(blooms => blooms[1]+1);

    starts.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    ends.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    // arr is sorted but can contain repeats! 
    // should return the last possible idx of target
    let bSearch = function(target, arr, left, right) {
        while (left < right){
            let mid = Math.floor((left+right)/2);
            if (arr[mid] === target) {
                left = mid+1;
            } else if (arr[mid] < target){
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
        if (arr[right] <= target) return right;
        if (arr[left] <= target) return left;
        return left-1;
    };

    // console.log(starts)
    // console.log(ends)
    let output = people.map((ii) => {
        return bSearch(ii, starts, 0, starts.length-1) - bSearch(ii, ends, 0, ends.length-1)
    });

    return output;
};