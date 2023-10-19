/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // // direct solution, O(n) in time and space
    // let outS = [], outT = [];
    // for (let char of s){
    //     if (char === "#"){
    //         outS.pop();
    //     } else {
    //         outS.push(char);
    //     }
    // }
    // for (let char of t){
    //     if (char === "#"){
    //         outT.pop();
    //     } else {
    //         outT.push(char);
    //     }
    // }
    // return outS.join("") === outT.join("");

    // go backwards through the strings to determine the index of the last character
    let nextIdx = function(str, curIdx){
        while (curIdx >= 0 && str.charAt(curIdx) === '#'){
            let cnt = 1;
            curIdx--;
            while (curIdx >= 0 && cnt > 0){
                if (str.charAt(curIdx) === "#"){
                    cnt++;
                } else {
                    cnt--;
                }
                curIdx--;
            }
        }
        return curIdx;
    };

    let ii = nextIdx(s, s.length-1);
    let jj = nextIdx(t, t.length-1);

    // iterate through and check if characters match
    while (ii >= 0 && jj >= 0){
        if (s.charAt(ii) != t.charAt(jj)) return false;
        ii = nextIdx(s, ii-1);
        jj = nextIdx(t, jj-1);
    }

    // if we find all matching characters
    // also make sure we processed the entirety of both strings
    return ii < 0 && jj < 0;
};