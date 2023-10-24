/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let queue = [root];
    let output = [];
    while (queue.length > 0){
        let newQueue = [];
        let curMax = -Infinity;
        while (queue.length > 0){
            let node = queue.pop();
            if (node?.val > curMax){
                curMax = node.val;
            }
            if (node?.left) newQueue.push(node.left);
            if (node?.right) newQueue.push(node.right);
        }
        if (curMax != -Infinity) output.push(curMax);
        queue = newQueue;
    }
    return output;
};