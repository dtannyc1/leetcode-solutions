/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    // write it as one sorting function
    // return arr.sort((a,b) => {
    //     let arrA = a.toString(2).split("");
    //     let arrB = b.toString(2).split("");
    //     let sumA = 0, sumB = 0;

    //     for (let num of arrA){
    //         sumA += parseInt(num);
    //     }
    //     for (let num of arrB){
    //         sumB += parseInt(num);
    //     }
    //     if (sumA < sumB) return -1;
    //     if (sumA > sumB) return 1;
        
    //     if (a < b) return -1;
    //     if (a > b) return 1;
    //     return 0;
    // })

    // sort numbers 
    let mapped = arr.map((v,ii) => {
        return {
                ii: ii, 
                value: v.toString(2).split("").reduce((acc, val) => acc + parseInt(val), 0)
            }
    });
    mapped.sort((a,b) => {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        
        if (arr[a.ii] < arr[b.ii]) return -1;
        if (arr[a.ii] > arr[b.ii]) return 1;

        return 0;
    });

    return mapped.map(val => arr[val.ii])
};