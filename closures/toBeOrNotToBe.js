/**
 * LeetCode Problem: To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be
 * Difficulty: Easy
 * Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
 * 
 * toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
 * notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

 


 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var expect = function (val) {
	const toBe = function (accept) {
		if (val === accept) return true;
		else throw new Error("Not Equal");
	};

	const notToBe = function (accept) {
		if (val !== accept) return true;
		else throw new Error("Equal");
	};

	return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
