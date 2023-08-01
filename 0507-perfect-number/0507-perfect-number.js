/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    // let sum = 0;
    // for (1..num/2) 
        // check if it's a divisor, if true, add it to sum
    // return sum === num
    if (num % 2 != 0) return false;

    let sum = 1;
    let upperLimit = num/2+1;
    let ii = 2;
    while (ii < upperLimit) {
        if (num % ii === 0) {
            sum += ii;
            sum += num/ii;
            upperLimit = num/ii;
        }
        ii++;
    }
    return sum === num
};
