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

    // go backwards through the strings to determine the last character
    let nextChar = function(str, curIdx){
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

    let ii = nextChar(s, s.length-1);
    let jj = nextChar(t, t.length-1);

    while (ii >= 0 && jj >= 0){
        if (s.charAt(ii) != t.charAt(jj)) return false;
        ii = nextChar(s, ii-1);
        jj = nextChar(t, jj-1);
    }

    return ii < 0 && jj < 0;
};