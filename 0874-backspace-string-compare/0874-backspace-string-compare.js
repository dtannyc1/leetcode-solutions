/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let outS = [], outT = [];
    for (let char of s){
        if (char === "#"){
            outS.pop();
        } else {
            outS.push(char);
        }
    }
    for (let char of t){
        if (char === "#"){
            outT.pop();
        } else {
            outT.push(char);
        }
    }
    return outS.join("") === outT.join("");
};