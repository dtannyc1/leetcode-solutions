//https://leetcode.com/problems/minimum-common-value/description/

var getCommon = function(nums1, nums2) {
    let ii = 0;
    let jj = 0;
    while (ii < nums1.length && jj < nums2.length && nums1[ii] !== nums2[jj]) {
        if (nums1[ii] < nums2[jj]) {
            ii += 1;
        } else {
            jj += 1;
        }
    }
    if (ii === nums1.length || jj === nums2.length) {
        return -1;
    } else if (nums1[ii] === nums2[jj]) {
        return nums1[ii];
    } else {
        return -1;
    }
};
