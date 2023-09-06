/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    // hint says to interweave new nodes into existing list
    let curNode = head;
    let front = head;
    while (curNode != null){
        front = curNode.next;
        let copy = new Node(curNode.val, front, null);
        curNode.next = copy;
        curNode = front;
    }

    // now that new nodes are added to the list, make sure .random points to the right things
    curNode = head;
    while (curNode != null){
        if (curNode.random != null){
            curNode.next.random = curNode.random.next;
        }
        curNode = curNode.next.next;
    }

    // finally remove original from list
    // and make sure original list is back to normal
    let newHead = head.next;
    let newCurNode = head.next;
    curNode = head;
    while (curNode != null){
        curNode.next = newCurNode.next;
        curNode = curNode.next;
        if (curNode){
            newCurNode.next = curNode.next;
            newCurNode = newCurNode.next
        }
    }
    return newHead;
};