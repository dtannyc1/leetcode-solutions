// https://leetcode.com/problems/shifting-letters-ii/description/

// /**
//  * @param {string} s
//  * @param {number[][]} shifts
//  * @return {string}
//  */
var shiftingLetters = function(s, shifts) {
    // convert to numbers arr first, convert numbers arr to str at end
    let data = [];
    for (let ii = 0; ii < s.length; ii++) {
        data.push(s.charCodeAt(ii) - 97); // 97 is the charCode for 'a'
    }
    for (let ii = 0; ii < shifts.length; ii++) {
        for (let jj = shifts[ii][0]; jj <= shifts[ii][1]; jj++) {
            if (shifts[ii][2] === 1) { // shift forward
                data[jj] += 1;
            } else { // shift backwards
                data[jj] -= 1;
                if (data[jj] === -1) {data[jj] = 25}
            }
        }
    }
    return data.map(el => String.fromCharCode(el % 26 + 97)).join("");
};
