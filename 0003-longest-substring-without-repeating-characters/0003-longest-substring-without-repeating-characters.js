/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lastSeen = ({});
    let longestStr = 0;
    let currentStr = 0;
    for (let i = 0; i < s.length; i++){
        if (lastSeen[s.charAt(i)] === undefined){
            lastSeen[s.charAt(i)] = i;
            currentStr++;
        } else {
            prev = lastSeen[s.charAt(i)];
            if (i-1 - currentStr < prev){
                currentStr = i-prev;
            } else {
                currentStr++;
            }
            lastSeen[s.charAt(i)] = i;
        }
        if (currentStr > longestStr){
            longestStr = currentStr;
        }
    }
    return longestStr;
};