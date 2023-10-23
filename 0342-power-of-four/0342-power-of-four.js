/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // recursive solution
    // if (n <= 0) return false
    // if (n === 1 || n === 4) return true
    // if (n % 4) return false
    // return isPowerOfFour(n/4)

    // use logarithms
    if (n <= 0) return false
    if (n === 1 || n === 4) return true
    let pow = Math.log(n)/Math.log(4);
    // console.log(pow, Number.isInteger(pow))
    return Number.isInteger(pow);
};