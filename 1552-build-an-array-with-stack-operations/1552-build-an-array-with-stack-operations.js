/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stream = 1;
    let j = 0; // index of next target
    let operations = [];
    while (j < target.length){
        if (stream === target[j]){
            operations.push("Push");
            stream++;
            j++;
        } else {
            operations.push("Push");
            operations.push("Pop");
            stream++;
        }
    }
    return operations;
};