/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    // iterate through customers twice
    // first pass, keep track of increases from being open
    // second pass, points if closed
    let scores = [];
    let curScore = 0;
    for (let ii = 0; ii < customers.length; ii++){
        if (customers[ii] === 'N') {
            curScore += 1;
        } 
        scores.push(curScore);
    }

    let minInd = scores.length;
    let minScore = scores[minInd-1];
    curScore = 0;

    for (let jj = customers.length-1; jj >=1; jj--){
        if (customers[jj] === 'Y') {
            curScore += 1;
        } 
        if ((scores[jj-1] + curScore) <= minScore){
            minScore = (scores[jj-1] + curScore);
            minInd = jj;
        }
    }

    if (customers[0] === 'Y') {
        curScore += 1;
    } 
    if (curScore <= minScore){
        minScore = curScore;
        minInd = 0;
    }

    return minInd;
};