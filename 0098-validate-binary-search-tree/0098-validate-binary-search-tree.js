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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // if root is null, return true
    // if left & right are null, return true
    // if this.left.val >= this.val, return false
    // if this.right.val <= this.val, return false
    // if (!isValidBST(this.left)) return false
    // repeat for right
    // let maxLeft = 
    // if (this.left) {
    //    let maxLeft = this.left.value;
    //    let currentNode = this.left;
    //    while (currentNode.right) {
    //      maxLeft = currentNode.right.val;
    //      currentNode = currentNode.right;
    //    }
    // }

    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (root.left && root.left.val >= root.val) return false;
    if (root.right && root.right.val <= root.val) return false;
    if (!isValidBST(root.left)) return false;
    if (!isValidBST(root.right)) return false;

    if (root.left) {
      let maxLeft = root.left.value;
      let currentNode = root.left;
      while (currentNode.right) {
        maxLeft = currentNode.right.val;
        currentNode = currentNode.right;
      }
      if (maxLeft >= root.val) return false;
    }
    if (root.right) {
      let minRight = root.right.value;
      let currentNode = root.right;
      while (currentNode.left) {
        minRight = currentNode.left.val;
        currentNode = currentNode.left;
      }
      if (minRight <= root.val) return false;
    }

    return true;

};