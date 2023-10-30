/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        let arrA = a.toString(2).split("");
        let arrB = b.toString(2).split("");
        let sumA = 0, sumB = 0;

        for (let num of arrA){
            sumA += parseInt(num);
        }
        for (let num of arrB){
            sumB += parseInt(num);
        }
        if (sumA < sumB) return -1;
        if (sumA > sumB) return 1;
        
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

};