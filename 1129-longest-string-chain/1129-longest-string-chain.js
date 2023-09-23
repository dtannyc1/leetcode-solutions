/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // for every word, remove a letter and check if it exists in words
    let dict = ({});
    let potPreds = [];
    for (let ii = 0; ii < words.length; ii++){
        dict[words[ii]] = ii+1; // force to be truthy
    }

    for (let ii = 0; ii < words.length; ii++){
        preds = [];
        let word = words[ii];
        for (let jj = 0; jj < word.length; jj++){
            let newWord = word.substring(0,jj) + word.substring(jj+1);
            if (dict[newWord]) preds.push(dict[newWord]-1);
        }
        potPreds.push(preds);
    }


    // use potPreds to figure out maximum length of chain
    // make sure to memoize answers
    let maxLengths = new Array(words.length).fill(null);
    
    let updateMaxLength = function(ii){
        if (maxLengths[ii]) return maxLengths[ii];
        let curMaxLength = 1;
        let predMaxLength = 0;
        for (let pred of potPreds[ii]){
            let len = updateMaxLength(pred);
            if (len > predMaxLength) predMaxLength = len;
        }
        maxLengths[ii] = curMaxLength + predMaxLength;
        return maxLengths[ii];
    }

    let output = 0;
    for (let ii = 0; ii < words.length; ii++){
        if (!maxLengths[ii]){
            updateMaxLength(ii);
        }
        if (maxLengths[ii] > output) output = maxLengths[ii];
    }
    return output;
};