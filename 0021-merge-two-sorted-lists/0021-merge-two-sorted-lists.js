/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let listStart = null;
    let curNode = null;
    while (list1 && list2){
        if (list1.val < list2.val) {
            if (!curNode) {
                listStart = new ListNode(list1.val);
                curNode = listStart;
            } else {
                curNode.next = new ListNode(list1.val);
                curNode = curNode.next;
            }
            list1 = list1.next;
        } else {
            if (!curNode) {
                listStart = new ListNode(list2.val);
                curNode = listStart;
            } else {
                curNode.next = new ListNode(list2.val);
                curNode = curNode.next;
            }
            list2 = list2.next;
        }
    }
    while (list1) {
        if (!curNode) {
            listStart = new ListNode(list1.val);
            curNode = listStart;
        } else {
            curNode.next = new ListNode(list1.val);
            curNode = curNode.next;
        }
        list1 = list1.next;
    }
    while (list2) {
        if (!curNode) {
            listStart = new ListNode(list2.val);
            curNode = listStart;
        } else {
            curNode.next = new ListNode(list2.val);
            curNode = curNode.next;
        }
        list2 = list2.next;
    }
    return listStart;
};