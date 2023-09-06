/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // sort the input from largest to smallest
    let sorted = stones.sort((a,b) => {
            if (a > b) return -1; 
            if (a===b) return 0; 
            return 1;
        });
    while (sorted.length > 1){
        if (sorted[0] === sorted[1]) {
            sorted.shift();
            sorted.shift(); // destroy both
        } else {
            let x = sorted.shift();
            let y = sorted.shift();
            let newStone = Math.abs(x-y); // calculate new stone
            // insert stone into right place
            let jj = 0;
            while (jj < sorted.length && sorted[jj] > newStone){
                jj++;
            }
            sorted.splice(jj,0,newStone); 
        }
    }
    if (sorted.length === 1) return sorted;
    return 0;
};