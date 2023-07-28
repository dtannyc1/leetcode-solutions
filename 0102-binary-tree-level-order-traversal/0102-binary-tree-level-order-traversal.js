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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let output = [[root.val]];
    let leftTree = levelOrder(root.left);
    let rightTree = levelOrder(root.right);
    while (leftTree.length > 0 && rightTree.length > 0){
        let level = leftTree.shift();
        level = level.concat(rightTree.shift());
        output.push(level);
    }
    if (leftTree.length > 0) {
        output = output.concat(leftTree);
    }
    if (rightTree.length > 0) {
        output = output.concat(rightTree);
    }
    return output;
};