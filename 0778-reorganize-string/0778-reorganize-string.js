/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // iterate through s, build hash counter for each char
    // sort letters by most to least common
    // build string by taking most common letter that wasnt just used
    
    let charHash = ({});
    let curMax = 1;
    for (let ii = 0; ii < s.length; ii++){
        charHash[s.charAt(ii)] = charHash[s.charAt(ii)] + 1 || 1;
        curMax = Math.max(curMax, charHash[s.charAt(ii)])
    }
    if (curMax > Math.ceil(s.length/2)) {
        return "";
    }
    let keys = Object.keys(charHash).sort((a,b) => {
        if (charHash[a] > charHash[b]) return -1;
        if (charHash[b] > charHash[a]) return 1;
        else return 0;
    });
    console.log(charHash)
    console.log(keys)
    let output = "";
    let lastAdded = "";
    while (keys.length > 0) {
        if (keys[0] != lastAdded) {
            output += keys[0];
            lastAdded = keys[0];
            charHash[keys[0]] -= 1;
            if (charHash[keys[0]] === 0) {
                delete charHash[keys[0]];
                keys.splice(0,1);
            } else{ 
                let ii = 0;
                while (keys.length > ii+1 && charHash[keys[ii]] < charHash[keys[ii+1]]) {
                    let tmp = keys[ii];
                    keys[ii] = keys[ii+1];
                    keys[ii+1] = tmp;
                    ii++;
                }
            }
        } else {
            if (keys.length === 1) {
                console.log(output)
                return "";
            }
            output += keys[1];
            lastAdded = keys[1];
            charHash[keys[1]] -= 1;
            if (charHash[keys[1]] === 0) {
                delete charHash[keys[1]];
                keys.splice(1,1);
            } else {
                let ii = 1;
                while (keys.length > ii+1 && charHash[keys[ii]] < charHash[keys[ii+1]]) {
                    let tmp = keys[ii];
                    keys[ii] = keys[ii+1];
                    keys[ii+1] = tmp;
                    ii++;
                }
            }
        }
        // // slow resorting every single iteration
        // keys = Object.keys(charHash).sort((a,b) => {
        //     if (charHash[a] > charHash[b]) return -1;
        //     if (charHash[b] > charHash[a]) return 1;
        //     else return 0;
        // });
    }
    return output;
};