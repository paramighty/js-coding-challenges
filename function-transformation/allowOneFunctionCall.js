/*
* LeetCode Problem: Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call/
 * Difficulty: Easy

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.


 * Time Complexity: O(1)
 * Space Complexity: O(1)
*/

var once = function (fn) {
	let callFunction = false; // Tracks if the function has been called
	let result; // Stores the function's result

	return function (...args) {
		// Returns a new function that takes any number of arguments
		if (!callFunction) {
			// If the function hasn't been called before
			callFunction = true; // Mark it as called
			result = fn(...args); // Call the original function and store result
		} else {
			result = undefined; // Return undefined on subsequent calls
		}

		return result; // Return the result of the first function call
	};
};
