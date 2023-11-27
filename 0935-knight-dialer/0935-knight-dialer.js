/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    let moves = {
        0: [4,6],
        1: [6,8],
        2: [7,9],
        3: [4,8],
        4: [3,9,0],
        5: [],
        6: [1,7,0],
        7: [2,6],
        8: [1,3],
        9: [2,4]
    };
    let digits = new Array(10).fill(1);
    
    for (let i = 1; i < n; i++){
        let newDigits = new Array(10).fill(0);
        for (let j = 0; j < 10; j++){
            for (let dig of moves[j]){
                newDigits[dig] += digits[j];
                newDigits[dig] = newDigits[dig] % (Math.pow(10, 9) + 7);
            }
        }
        digits = newDigits.slice();
    }
    // console.log(digits)
    let sum = 0;
    for (let j = 0; j < 10; j++){
        sum += digits[j];
    }
    return sum % (Math.pow(10, 9) + 7)
};