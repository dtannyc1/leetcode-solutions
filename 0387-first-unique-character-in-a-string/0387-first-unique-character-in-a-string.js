/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // O(n) if we can just do one pass
    let dict = {};
    for (let i=0; i < s.length; i++){
        let char = s.charAt(i);
        dict[char] ||= [];
        dict[char].push(i); 
    }
    let ind = Infinity;
    for (let arr of Object.values(dict)){
        if (arr.length === 1){
            if (arr[0] < ind) ind = arr[0];
        }
    };
    if (ind === Infinity) return -1;
    else return ind;
};