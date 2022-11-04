// LeetCode #344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


function reverseString(s) {
    //initialize variable for end runner
    var runner = s.length - 1
    //loop thru arguement while i is <= to runner
    for (let i = 0; i < runner; i++){
        //initialize temp variable to hold one value
        var temp = s[i];
        s[i] = s[runner];
        s[runner] = temp;
        runner--
    }
    return s
};

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);