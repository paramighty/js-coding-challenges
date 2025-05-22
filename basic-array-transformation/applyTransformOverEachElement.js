/**
 * LeetCode Problem: Apply Transform Over Each Element in Array

 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Difficulty: Easy
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. 
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var map = function (arr, fn) {
	let newArray = [];

	arr.forEach((item, index) => {
		newArray.push(fn(item, index));
	});

	return newArray;
};
