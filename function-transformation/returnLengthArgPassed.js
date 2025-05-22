/*
* LeetCode Problem: Return Length of Arguments Passed

https://leetcode.com/problems/return-length-of-arguments-passed
 * Difficulty: Easy

Write a function argumentsLength that returns the count of arguments passed to it.
 


 * Time Complexity: O(1)
 * Space Complexity: O(1)
*/

var argumentsLength = function (...args) {
	let x = [...args];

	return x.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
