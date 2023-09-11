/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let output = [];
    let dict = ({});

    for (let ii = 0; ii < groupSizes.length; ii++){
        if (dict[groupSizes[ii]]){
            dict[groupSizes[ii]].push(ii);
        } else {
            dict[groupSizes[ii]] = [ii];
        }
        if (dict[groupSizes[ii]] && dict[groupSizes[ii]].length === groupSizes[ii]) {
            output.push(dict[groupSizes[ii]]);
            dict[groupSizes[ii]] = [];
        }
    }

    return output;
};