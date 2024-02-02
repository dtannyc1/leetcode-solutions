/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    // find first number greater than low that has seq digits
    // then add 1 to each digit until last one is a 9
    
    let arr = [];
    let next = findFirstSeqNumber(low);
    while (next <= high){
        arr.push(next);
        next = findNextSeqNumber(next);
    }
    return arr;
};

// 30099
let findFirstSeqNumber = function(num){ // finds first value after low that's sequential
    let digits = num.toString().split('');
    let increased = false;
    let incremented = false;
    let prependOne = false;
    for (let i=1; i < digits.length; i++){
        let goal = parseInt(digits[i-1])+1; // 4
        let start = parseInt(digits[i]); // 0
        if (goal >= 10){ // if last digit we saw was a 9
            if (prependOne){
                return Infinity;
            } else {
                for (let j=0; j<i; j++){
                    digits[j] = (2+j).toString(); 
                }
                goal = parseInt(digits[i-1])+1;
                start = parseInt(digits[i]);
                prependOne = true;
                if (goal >= 10){
                    return Infinity;
                }
            }
        }
        if (start != goal){
            if (start < goal){
                digits[i] = goal.toString();
                increased = true;
            } else {
                if (increased){
                    digits[i] = goal.toString();
                } else {
                    if (!incremented){
                        incremented = true;
                        increased = true;
                        for (let j=0; j < i; j++){
                            digits[j] = (parseInt(digits[j])+1).toString();
                        }
                        goal = parseInt(digits[i-1])+1;
                        if (goal < 10){
                            digits[i] = goal.toString();
                        } else {
                            if (prependOne){
                                return Infinity;
                            } else {
                                for (let j=0; j<i; j++){
                                    digits[j] = (2+j).toString(); 
                                }
                                goal = parseInt(digits[i-1])+1;
                                prependOne = true;
                                if (goal >= 10){
                                    return Infinity;
                                } else {
                                    digits[i] = goal.toString();
                                }
                            }
                        }
                    } else {
                        digits[i] = goal.toString();
                    }
                }
            }
        }
    }
    if (prependOne){
        digits.unshift('1');
    }
    return parseInt(digits.join(''));
}

let findNextSeqNumber = function(num) { // works if input is already sequential
    let digits = num.toString().split('');
    let firstDigit = 0;
    if (digits[digits.length-1] === '9'){
        digits.unshift("1");
        firstDigit = 1;
    } else {
        firstDigit = parseInt(digits[0]) + 1;
        digits[0] = firstDigit.toString();
        
    }
    for (let i=1; i < digits.length; i++){
        digits[i] = (firstDigit+i).toString();
    }
    return parseInt(digits.join(''));
};