/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;
    for (let log of logs){
        switch (log){
            case ("../"):
                if (count != 0) count -= 1;
                break;
            case ("./"):
                break;
            default: 
                count += 1;
        }
    }
    return count;
};