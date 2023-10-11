/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // read s from left to right
    // if we hit digits, start storing them 
    // we hit a [ , parseInt ^ to get k -> [k1, k2, 3]
        // find associated right bracket 
    // if we hit a string, start storing a string ["c"]
        //until ] 
    // evaluate k * string


    let ii = 0;
    let kStack = [];
    let stringStack = [];
    let output = "";
    let curCoeff = "";
    while (ii < s.length){
        if (!isNaN(parseInt(s.charAt(ii)))){
            curCoeff += s.charAt(ii);
        } else if (s.charAt(ii) === "["){
            kStack.push(parseInt(curCoeff));
            curCoeff = "";
            stringStack.push("");
        } else if (s.charAt(ii) === "]"){
            let k = kStack.pop();
            let str = stringStack.pop();
            let repStr = str.repeat(k);
            if (stringStack.length > 0){
                stringStack[stringStack.length-1] += repStr;
            } else {
                output += repStr;
            }
        } else {
            if (stringStack.length > 0){
                stringStack[stringStack.length-1] += s.charAt(ii);
            } else {
                stringStack.push(s.charAt(ii));
            }
        }
        ii++;
    }
    if (stringStack.length > 0){
        output += stringStack[0];
    }
    return output;
};


// "3[a2[c]]"

// stack = ["",3];
// currentString = "accaccacc";
// currentCoefficient = "";

// prev = 3
// prevStr = ""

// var decodeString = function(s) {
//     const stack = [];
//     const nums = "0123456789";
//     let currentString = "";
//     let currentCoefficient = "";

//     for (const char of s) {
//         if (char === "[") {
//             // Push the current string and coefficient onto the stack.
//             stack.push(currentString);
//             stack.push(Number(currentCoefficient));
//             currentString = ""; // Reset the current string.
//             currentCoefficient = ""; // Reset the current coefficient.
//         } else if (char === "]") {
//             // Pop the coefficient and the previous string from the stack.
//             const prevCoefficient = stack.pop();
//             const prevString = stack.pop();
//             // Concatenate the current string 'currentString' with 'prevString' repeated 'prevCoefficient' times.
//             currentString = prevString + currentString.repeat(prevCoefficient);
//         } else if (nums.includes(char)) {
//             // If the character is a digit, build the current coefficient.
//             currentCoefficient += char;
//         } else {
//             // If it's not a digit or bracket, append it to the current string.
//             currentString += char;
//         }
//     }

//     return currentString;
// }; 