/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right) return head;
    let ii = 0;
    let newStart = new ListNode(0, head);
    let before = newStart; // [0, 3, 5]
    let arr = [];
    let after = newStart;
    while (ii < right + 1){ // 2 < 3
        ii++; // 3
        if (ii < left){ // 3 < 1
            before = before.next; // 
            after = after.next;
        } else if (ii < right + 1) { // 3 < 3
            after = after.next; // node 5
            if (after){
                arr.push(after); // [3, 5]
            }
        } else {
            after = after ? after.next : null;
        }
    }
    before.next = arr[arr.length-1];
    arr[0].next = after;
    for (let jj = 1; jj < arr.length; jj++){
        arr[jj].next = arr[jj-1];
    }
    return newStart.next;
};