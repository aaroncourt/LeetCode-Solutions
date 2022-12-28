//Submission found here: https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/866708005/

// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

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
var inorderTraversal = function(root) {
    // variable to return
    var outputArr = []

    // if root is null return empty array, else outputArr[0] = root.val
    if (!root) return outputArr;

    // function to traverse entire tree
    function readNode(node){

        // if left node is present, call readNode for left
        if (node.left){
            readNode(node.left);
        }

        // Once right has been read, push node.val to outputArr
         outputArr.push(node.val) 

        //if right node is present, call readNode for right
        if (node.right){
            readNode(node.right);
        }
    }

    // call readNode
    readNode(root);

    return outputArr
};