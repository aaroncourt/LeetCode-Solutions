// Submitted solution can be found here: https://leetcode.com/problems/reverse-linked-list/submissions/867281554/

// LeetCode #206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // if head is null or list has only one val  
    if (!head || !head.next){
        return head
    }

    // set up pointers variables to store nodes while working through list
    var prev = null;
    var curr = head;
    var nxt = null;

    // loop thru list reassigning nodes
    while (curr) {
        // assign nxt to curr.next to store the next node
        nxt = curr.next;
        // assign the next value of curr to the value of prev
        curr.next = prev;
        // assign prev to be the node stored in curr
        prev = curr;
        // assign cur to the node stored in nxt to move to that node
        curr = nxt;
    }

    // assign head of list (node) to last node which equals prev
    head = prev;

    return head
};