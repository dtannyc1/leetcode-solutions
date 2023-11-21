/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    // first pass, store characters as keys with arrays of first seen and last seen
    // second pass, go through all keys, iterate through first - last to determine how many unique characters there are 
    
    let chars = {};
    for (let i = 0; i < s.length; i++){
        chars[s.charAt(i)] ||= [i,i];
        chars[s.charAt(i)][1] = i;
    };

    let output = 0;
    for (let [key, arr] of Object.entries(chars)){
        let set = new Set();
        for (let i = arr[0]+1; i < arr[1]; i++){
            set.add(s.charAt(i));
        }
        output += set.size;
    }
    return output;
};