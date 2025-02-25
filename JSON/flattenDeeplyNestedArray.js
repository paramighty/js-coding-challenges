/**
 * LeetCode Problem: Flatten Deeply Nested Array


 * https://leetcode.com/problems/flatten-deeply-nested-array/
 * Difficulty: Medium
 * 
	Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

Attempt - 1 (Failed)
 *
 * Time Complexity: 
 * Space Complexity:
 */

var flat = function (arr, n) {
	let array = [];

	function countdown(n) {
		if (n === 0) {
			for (let i = 0; i < arr.length; i++) {
				array.push(arr[i]);
			}
			return array;
		}

		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				array = array.concat(arr[i]);

				console.log(array);
			} else {
				array.push(arr[i]);
			}
		}

		return countdown(n - 1);
	}
	return countdown(n);
};

/*Attempt - 2 (Failed)
 *
 * Time Complexity: Time Limit Exceeded
 * Space Complexity:
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
	if (n === 0) return arr;

	let newArray = []; //Create new array so that arr does not get affected.

	arr.forEach((item) => {
		if (Array.isArray(item)) {
			newArray = newArray.concat(item);
		} else {
			newArray.push(item);
		}
	});

	return flat(newArray, n - 1);
};

/*Attempt - 3 (Accepted)
 *
 * Time Complexity: Time Limit Exceeded
 * Space Complexity:
 */

var flat = function (arr, n) {
	if (n === 0) return arr;

	let newArray = []; //Create new array so that arr does not get affected.

	// If there are no nested arrays, return arr early.
	if (!arr.some(Array.isArray)) return arr;

	arr.forEach((item) => {
		if (Array.isArray(item)) {
			newArray.push(...item); //instead of concat, push with spread array`
		} else {
			newArray.push(item);
		}
	});

	return flat(newArray, n - 1);
};
