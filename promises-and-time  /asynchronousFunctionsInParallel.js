/**
 * LeetCode Problem: Promise Time Limit
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 * Difficulty: Medium
 *
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
 * promise resolves:
 * When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
 * promise rejects:
 * When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
 *
 * Please solve it without using the built-in Promise.all function.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

var promiseAll = function (functions) {
	return new Promise((resolve, reject) => {
		let arrayThing = [];
		let countPromises = 0;

		for (let i = 0; i < functions.length; i++) {
			const promise = functions[i]();
			promise
				.then((result) => {
					arrayThing[i] = result;
					countPromises++;
					if (functions.length === countPromises) {
						resolve(arrayThing);
					}
				})
				.catch((error) => reject(error));
		}
	});
};

/*Example 1 from Leetcode:

Input: functions = [
	() => new Promise(resolve => setTimeout(() => resolve(5), 200))
  ]
  Output: {"t": 200, "resolved": [5]}
  Explanation: 
  promiseAll(functions).then(console.log); // [5]
  
  The single function was resolved at 200ms with a value of 5. */
