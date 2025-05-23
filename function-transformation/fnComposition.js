/*
* LeetCode Problem:  Function Composition
 * https://leetcode.com/problems/function-composition
 * Difficulty: Easy
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.


 * Time Complexity: O(1)
 * Space Complexity: O(1)
*/
var compose = function (functions) {
	return function (x) {
		return functions.reduceRight((accum, currentFunc) => {
			return currentFunc(accum);
		}, x);
	};
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
