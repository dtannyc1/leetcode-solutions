/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeRoot = null;
    let beforeEnd = null;
    let afterRoot = null;
    let afterEnd = null;
    let curNode = head;
    while (curNode) {
        if (curNode.val < x) {
            if (!beforeRoot) {
                beforeRoot = curNode;
                beforeEnd = curNode;
            } else {
                beforeEnd.next = curNode;
                beforeEnd = curNode;
            }
        } else {
            if (!afterRoot) {
                afterRoot = curNode;
                afterEnd = curNode;
            } else {
                afterEnd.next = curNode;
                afterEnd = curNode;
            }
        }
        curNode = curNode.next;
    }
    if (beforeRoot && afterRoot) {
        beforeEnd.next = afterRoot;
        afterEnd.next = null;
        return beforeRoot;
    } else if (beforeRoot){
        return beforeRoot;
    } else {
        return afterRoot;
    }

};