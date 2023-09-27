/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    // dont actually construct the string, it'll prob be too slow
    // store 
    let output = [];
    let outputLen = 0;
    let reps = [];
    let curOutputLen = [];

    for (let ii = 0; ii < s.length; ii++){
        if (!parseInt(s.charAt(ii))){
            output.push(s.charAt(ii));
            outputLen++;
            reps.push(0);
            curOutputLen.push(0);
        } else {
            // curOutputLen needs to only be changed once
            if (!curOutputLen[curOutputLen.length-1]){
                curOutputLen[curOutputLen.length-1] = outputLen;
            }
            let num = parseInt(s.charAt(ii));
            if (reps[reps.length-1] === 0){
                reps[reps.length-1] = num;
            } else {
                reps[reps.length-1] *= num;
            }
            outputLen *= num;
        }

        if (k <= outputLen){
            break;
        }
    }

    console.log(output)
    console.log(outputLen)
    console.log(reps)
    console.log(curOutputLen)
    if (outputLen === k){
        return output[output.length-1];
    } else {
        console.log(outputLen, k)
        console.log(curOutputLen)
        // traverse backwards through reps
        let ii = reps.length-1;
        while (outputLen > k && ii >= 0){
            if (reps[ii]){
                if (outputLen - curOutputLen[ii] >= k){
                    outputLen -= curOutputLen[ii];
                    reps[ii] -= 1;
                } else {
                    outputLen--;
                    ii--;
                }
            } else {
                outputLen--;
                ii--;
            }
        }
        return output[ii];
    }
};