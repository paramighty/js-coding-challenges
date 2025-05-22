/**
 * LeetCode Problem: Create Hello World Function
 * https://leetcode.com/problems/create-hello-world-function/
 * Difficulty: Easy
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 


 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var createHelloWorld = function () {
	return function (...args) {
		return "Hello World";
	};
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
