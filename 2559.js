// https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

// /**
//  * @param {string[]} words
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
var vowelStrings = function(words, queries) {
    let ans = [];
    let vowels = ['a','e','i','o','u'];
    // convert words to an array of true/false
    let vowelStr = words.map(word => {
        if (vowels.some(vowel => vowel === word.charAt(0)) &&
            vowels.some(vowel => vowel === word.charAt(word.length-1))) {
                return true;
            } else {
                return false;
            }
    })
    for (let ii = 0; ii < queries.length; ii++){
        let query = queries[ii];
        let count = 0;
        for (let jj = query[0]; jj <= query[1]; jj++) {
            if (vowelStr[jj]) {count += 1;}
        }
        ans.push(count);
    }
    return ans;
};
