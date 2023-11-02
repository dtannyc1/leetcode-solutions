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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let count = 0;

    let recAvgCheck = function(node){
        let sum = 0;
        let numNodes = 1;
        if (node.left) {
            let [total, num] = recAvgCheck(node.left);
            sum += total;
            numNodes += num;
        }
        sum += node.val;
        if (node.right){
            let [total, num] = recAvgCheck(node.right);
            sum += total;
            numNodes += num;
        }
        if (Math.floor(sum/numNodes) === node.val) count++;
        return [sum, numNodes];
    };

    recAvgCheck(root);

    return count;
};