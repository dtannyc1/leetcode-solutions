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
        lastIdx[s.charAt(ii)] = ii;
    }

    for (let ii = 0; ii < s.length; ii++){
        let char = s.charAt(ii);
        if (!chars.has(char)){
            while (outputArr.length && 
                    char < outputArr[outputArr.length-1] && 
                    ii < lastIdx[outputArr[outputArr.length-1]]){
                chars.delete(outputArr.pop());
            }

            chars.add(char);
            outputArr.push(char);
        }
    }
    return outputArr.join("");
};