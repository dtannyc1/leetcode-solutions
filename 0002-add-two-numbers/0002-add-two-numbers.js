/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = [], num2 = [];
    while (l1){
        num1.unshift(l1.val);
        l1 = l1.next;
    }
    while (l2){
        num2.unshift(l2.val);
        l2 = l2.next;
    }

    let sum = [];
    let rem = 0;
    while (num1.length > 0 && num2.length > 0){
        let dig1 = num1.pop();
        let dig2 = num2.pop();
        let dig = rem + dig1 + dig2;
        rem = Math.floor(dig/10);
        sum.push(dig % 10);
        // console.log(dig, sum)
    }
    while (num1.length > 0){
        let dig1 = num1.pop();
        let dig = rem + dig1;
        rem = Math.floor(dig/10);
        sum.push(dig % 10);
    }
    while (num2.length > 0){
        let dig2 = num2.pop();
        let dig = rem + dig2;
        rem = Math.floor(dig/10);
        sum.push(dig % 10);
    }
    if (rem != 0){
        sum.push(rem);
    }

    // let output = sum.toString().split("");
    let output = sum.reverse();
    let head, prevNode;

    for (let num of output){
        head = new ListNode(num, prevNode);
        prevNode = head;
    }
    return head;
};