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
var findMode = function(root) {
    // traverse the tree in order
    let mode = [];
    let maxCount = 0;
    let prev;
    let count = 0;

    let inOrderTraversal = function(node) {
        if (node === null){
            return;
        }

        inOrderTraversal(node.left);

        if (prev === null){
            prev = node.val;
            count = 1;
        } else if (prev === node.val){
            count++;
        } else {
            prev = node.val;
            count = 1;
        }

        if (count > maxCount){
            maxCount = count;
            mode = [node.val];
        } else if (count === maxCount){
            mode.push(node.val);
        }

        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);

    return mode;
};