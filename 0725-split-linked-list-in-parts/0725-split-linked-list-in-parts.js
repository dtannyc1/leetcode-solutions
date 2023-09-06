/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // count how many elements are in linked list
    let n = 0;
    let curNode = head;
    while (curNode) {
        n += 1;
        curNode = curNode.next;
    }
    let output = new Array(k);

    curNode = head;
    for (let ii = 0; ii < k; ii++){
        output[ii] = curNode;
        let iters = Math.floor(n/k);
        if (n % k > ii) iters += 1;
        if (curNode != null){
            for (let jj = 0; jj < iters-1; jj++){
                curNode = curNode.next;
                if (!curNode){
                    break;
                }
            }
        }
        let tmp = curNode;
        curNode = curNode ? curNode.next : null;
        if (tmp) tmp.next = null;
    }

    return output;
};