/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let output = [];
    let dict = ({});

    for (let ii = 0; ii < groupSizes.length; ii++){
        let ind = groupSizes[ii];
        if (dict[ind]){
            dict[ind].push(ii);
        } else {
            dict[ind] = [ii];
        }
        if (dict[ind].length === ind) {
            output.push(dict[ind]);
            dict[ind] = [];
        }
    }

    return output;
};