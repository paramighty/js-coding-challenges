/**
 * LeetCode Problem: Counter
 * https://leetcode.com/problems/counter/
 * Difficulty: Easy
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


 


 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var createCounter = function (n) {
	return function counter() {
		return n++;
	};
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
