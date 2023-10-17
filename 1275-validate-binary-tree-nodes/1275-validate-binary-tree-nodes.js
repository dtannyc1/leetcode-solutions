/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let parentNodes = new Array(n).fill(null);
    // [2,0,1,n]
    //  1 <> 0 
    // need to fix for loops

    let isLoop = (ii, memo = ({})) => {
        if (parentNodes[ii] === null){
            return false;
        } else if (memo[ii] === true){
            return true;
        } else {
            memo[ii] = true;
            return isLoop(parentNodes[ii], memo);
        }
    }

    for (let ii = 0; ii < leftChild.length; ii++){
        let child = leftChild[ii];
        if (child != -1){
            if (parentNodes[child] === null){
                parentNodes[child] = ii;
                if (isLoop(child)){
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    for (let ii = 0; ii < rightChild.length; ii++){
        let child = rightChild[ii];
        if (child != -1){
            if (parentNodes[child] === null){
                parentNodes[child] = ii;
                if (isLoop(child)){
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    let countNull = 0;
    for (let node of parentNodes){
        if (node === null){
            countNull++;
            if (countNull > 1){
                return false;
            }
        }
    }
    return countNull === 1;
};