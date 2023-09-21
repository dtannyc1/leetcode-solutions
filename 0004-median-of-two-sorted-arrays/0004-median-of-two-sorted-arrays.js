/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // use sliding wnidows to avoid mutating nums1, nums2
    let left1 = 0, right1 = nums1.length-1;
    let left2 = 0, right2 = nums2.length-1;

    // find median of both arrays
    // we know that for both arrays, there are equal # of elements greater and less than their respective medians
    // if the two medians are equal, just return that value
    // if not, move the left pointer of the smaller median and the right pointer of the larger median
    // repeat until (right1 - left1) + (right2 - left2) <= 5
    // then just merge the leftovers and find the median

    let med1, med2;
    while ((right1 - left1) + (right2 - left2) <= 5){
        // if ((right1 - left1) % 2 === 0) {
        //     med1 = nums1[(right1 - left1)/2];
        // } else {
        //     med1 = (nums1[(right1-1 - left1)/2] + nums1[(right1+1 - left1)/2])/2;
        // }
        // if ((right2 - left2) % 2 === 0) {
        //     med2 = nums2[(right2 - left2)/2];
        // } else {
        //     med2 = (nums2[(right2-1 - left2)/2] + nums2[(right2+1 - left2)/2])/2;
        // }


        break;
    }

    // merge leftovers
    let arr = (nums1.slice(left1,right1+1).concat(...nums2.slice(left2,right2+1))).sort((a,b) => {
        if (a < b) return -1;
        if (a === b) return 0;
        return 1;
    });
    console.log(arr)
    // return median
    if (arr.length % 2 === 0){
        return (arr[arr.length/2]+arr[arr.length/2-1])/2;
    } else {
        return arr[Math.floor(arr.length/2)];
    }
};