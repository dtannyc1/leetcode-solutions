/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let dict = ({});
    for (let ii = 0; ii < s.length; ii++){
        if (dict[s.charAt(ii)]) {
            dict[s.charAt(ii)] += 1;
        } else {
            dict[s.charAt(ii)] = 1;
        }
    }

    let freqs = ({});
    let removals = 0;
    for (let [letter, freq] of Object.entries(dict)){
        while (freqs[freq] && freq > 0){
            freq -= 1;
            removals += 1;
        }
        freqs[freq] = true;
    }
    return removals;
};