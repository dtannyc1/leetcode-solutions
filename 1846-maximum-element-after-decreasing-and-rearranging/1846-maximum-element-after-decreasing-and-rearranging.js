/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=> {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    arr[0] = 1;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > arr[i-1]+1) arr[i] = arr[i-1] + 1;
    }
    return arr[arr.length-1];
};