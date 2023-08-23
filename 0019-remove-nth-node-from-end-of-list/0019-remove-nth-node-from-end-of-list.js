/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curNode = head;
    let nthNode = head;
    let nminus1Node = null;
    let ii = 0;
    while (ii < n){ // space curNode and nthNode n apart
        if (!curNode) {
            return head; // edge case: if the linked list is shorter than n
        }
        curNode = curNode.next;
        ii += 1;
    }
    while (curNode) { // move curNode, nthNode, nminus1Node forward until we hit end of list
        curNode = curNode.next; 
        nminus1Node = nthNode;
        nthNode = nthNode.next;
    }
    if (!nminus1Node){
        return nthNode.next; // edge case: remove first element
    } else {
        nminus1Node.next = nthNode.next; // remove nth node
        return head;
    }
};