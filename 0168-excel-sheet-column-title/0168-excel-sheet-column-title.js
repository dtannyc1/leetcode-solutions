/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let output = '';
    while (columnNumber > 26){
        let letterCode = columnNumber % 26;
        letterCode === 0 ? letterCode = 26 : 0;
        output = String.fromCharCode(letterCode + 64) + output;
        columnNumber = (columnNumber - letterCode) / 26;
    }
    output = String.fromCharCode(columnNumber + 64) + output;
    return output;
};