/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    // store them into two arrays
    // rejoin them afterwards
    let positives = [], negatives = [];
    let output = [];
    for (let num of nums){
        if (num > 0){
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }
    for (let i=0; i < positives.length; i++){
        output.push(positives[i])
        output.push(negatives[i])
    }
    return output;
    
    // takes too much space. can i just store indices?
    // work backwards - last number should be negative and then alternate
    // is splicing in numbers faster than just making new arrays?
};