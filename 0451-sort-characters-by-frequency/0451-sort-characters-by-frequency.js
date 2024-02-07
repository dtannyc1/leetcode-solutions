/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // find the frequency of each char
    // sort Object.keys by frequency
    // map sorted keys to have correct number of repeats
    // join again
    
    let dict = {};
    for (let char of s){
        dict[char] ||= 0;
        dict[char]++;
    };
    
    let sortedKeys = Object.keys(dict).sort((a,b) => {
        if (dict[a] < dict[b]) return 1;
        if (dict[b] < dict[a]) return -1;
        return 0;
    });
    
    let output = sortedKeys.map((char) => char.repeat(dict[char]));
    return output.join('')
};