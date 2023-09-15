/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    
    let digitArr = num.toString().split(""); // ["4", "5"...]
    let groups = []; // [["4","5"], ["1","2","3"]]
    let tmpgrp = []; // ["4","5"]
    for (let ii = digitArr.length-1; ii >=0; ii--){
        tmpgrp.unshift(digitArr[ii]); 
        if (tmpgrp.length === 3){
            groups.unshift(tmpgrp);
            tmpgrp = [];
        }
    }
    if (tmpgrp.length) groups.unshift(tmpgrp); // groups => [["1"], ["0","0","0"]]
    
    let strArr = []; // ["Forty Five Thousand", ]
    for (let ii = 0; ii < groups.length; ii++){ 
        let str = helper(groups[ii], groups.length - ii); // "Forty Five Thousand"
        if (str.length) strArr.push(str) // 2 would indicate thousands
    }
    return strArr.join(" ");
};

let helper = function(strArr, placeIdx){ // ["4","5"], 2
    // strArr => 0, ""
    let num = parseInt(strArr.join("")); // "45" => 45
    if (num === 0) return "";
    
    let outputStrArr = []; // ["Forty", "Five", "Thousand"]
    
    let dict = ({1: "One", 
                2: "Two", 
                3: "Three", 
                4: "Four", 
                5: "Five", 
                6: "Six", 
                7: "Seven", 
                8: "Eight", 
                9: "Nine", 
                10: "Ten", 
                11: "Eleven", 
                12: "Twelve", 
                13: "Thirteen", 
                14: "Fourteen", 
                15: "Fifteen", 
                16: "Sixteen", 
                17: "Seventeen", 
                18: "Eighteen", 
                19: "Nineteen",
                20: "Twenty", 
                30: "Thirty",
                40: "Forty",
                50: "Fifty",
                60: "Sixty",
                70: "Seventy",
                80: "Eighty",
                90: "Ninety"})
    
    if (num >= 100) {
        // convert first digit => str
        let key = Math.floor(num/100);
        outputStrArr.push(dict[key]);
        //....
        outputStrArr.push("Hundred");
        num = num % 100;
    }
    
    if (num >= 20){ 
        let key = num - num % 10; // 45 - 5 => 40
        outputStrArr.push(dict[key]); 
        num -= key; // num => 5
    } 
    
    if (num > 0){
        outputStrArr.push(dict[num]); // 
    }
    
    let placeIdxMap = ({2: "Thousand", 1: "", 3: "Million", 4: "Billion"})
    
    if (placeIdxMap[placeIdx].length) outputStrArr.push(placeIdxMap[placeIdx]);
    
    return outputStrArr.join(" "); // "Forty Five Thousand"
};