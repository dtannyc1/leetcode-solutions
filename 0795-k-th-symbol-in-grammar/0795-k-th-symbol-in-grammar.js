/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 // 0
 // 01
 // 0110 -> 0
 // 01101001
 // 0110100110010110
 // 01101001100101101001011001101001
 // 
var kthGrammar = function(n, k) {
    let isZero = true;

    while (k > 1){
        isZero = !isZero;
        k -= Math.pow(2, Math.floor(Math.log(k-1)/Math.log(2)));
    }

    return isZero? 0 : 1;
};