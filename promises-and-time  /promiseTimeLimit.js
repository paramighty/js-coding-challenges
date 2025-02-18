/**
 * LeetCode Problem: Promise Time Limit
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Medium
 *
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
 * The time limited function should follow these rules:
 * If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 * If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded"
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var timeLimit = function (fn, t) {
	return async function (...args) {
		try {
			const firstFetch = fn(...args); //First Promise since fn in asynchronous function

			// Second promise that rejects after 't' milliseconds and logs "Time Limit Exceeded"
			const timeFetch = new Promise((_, reject) => {
				setTimeout(() => {
					reject("Time Limit Exceeded");
				}, t);
			});
			const whowins = await Promise.race([firstFetch, timeFetch]); //Race method to see who finishes first!Does not matter resolve/reject
			return whowins;
		} catch (error) {
			throw error; //If there is an error, throw it to be handled by the caller
		}
	};
};

// Example 1 from Leetcode:

// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
