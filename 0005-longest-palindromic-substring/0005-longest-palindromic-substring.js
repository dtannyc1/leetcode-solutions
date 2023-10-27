/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if (len === 0) return "";
    if (len === 1) return s;

    let minStart = 0, maxLen = 0;

    let ii = 0;
    while (ii < len){
        if (len - ii < maxLen /2) break;
        
        let left = ii, right = ii;

        // Find center of the palindrome:
        while (right < len - 1 && s[right] === s[right+1]){
            right++;
        }

        ii = right + 1;

        // expand outwards for palindrome given the center
        while (left > 0 && right < len-1 && s[left-1] === s[right+1]){
            left--;
            right++;
        }

        let newLen = right-left+1;
        if (newLen > maxLen){
            maxLen = newLen;
            minStart = left;
        }
    }
    return s.substring(minStart, minStart + maxLen)
};