/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // go in reverse, put chars into arr
    // if char already in arr, check if prev char is smaller
        // if it is, dont add
        // if it isnt, remove previous from arr and add to end
    // return arr.reverse.join

    
    let outputArr = [];
    let chars = new Set();
    let lastIdx = {};
    for (let ii = 0; ii < s.length; ii++){
        lastIdx[s[ii]] = ii;
    }

    for (let ii = 0; ii < s.length; ii++){
        if (!chars.has(s[ii])){
            while (outputArr.length && s[ii] < outputArr[outputArr.length-1] && ii < lastIdx[outputArr[outputArr.length-1]]){
                chars.delete(outputArr.pop());
            }

            chars.add(s[ii]);
            outputArr.push(s[ii]);
        }
    }
    return outputArr.join("");
};