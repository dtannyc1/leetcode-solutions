/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    // // brute force solution
    // let output = [];
    // let maxLength = nums.length;
    // let i = 0;
    // while (i < maxLength){
    //     if (i < nums.length){
    //         let len = nums[i].length + i;
    //         if (maxLength < len) maxLength = len;
    //     }
    //     for (let j = Math.max(0, i+1-nums.length); j < i+1; j++){ // 1
    //         if (i-j < nums.length && j < nums[i-j].length){ // nums[0]
    //             output.push(nums[i-j][j]); // nums[0][1]
    //         }
    //     }
    //     i++;
    // }
    // return output;

    // bfs solution
    let nodes = [[0,0]];
    let output = [];
    while (nodes.length){
        let [x,y] = nodes.shift();
        output.push(nums[x][y]);
        if (y === 0 && x+1 < nums.length) nodes.push([x+1,y]);
        if (y+1 < nums[x].length) nodes.push([x,y+1]);
    }
    return output;
};