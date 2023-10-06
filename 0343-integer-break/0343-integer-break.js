/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    let num3s = Math.floor(n/3);
    let num2s = 0;
    let rem = n % 3;

    if (rem === 1){
        num2s = 2;
        num3s -= 1;
    } else if (rem === 2){
        num2s = 1;
    }

    return Math.pow(3, num3s) * Math.pow(2, num2s);
};