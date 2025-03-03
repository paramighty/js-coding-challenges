/**
 * LeetCode Problem: Compact Object

 * https://leetcode.com/problems/compact-object/
 * Difficulty: Medium
 * Given an object or array obj, return a compact object.
 * 
 * A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false. 
 *You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

// Attempt 1: Failed

var compactObject = function (obj) {
	const filteredValueFromArray = (array) => {
		let truthyValue = array.filter((item) => !!item);

		return truthyValue.map((item) =>
			Array.isArray(item) ? filteredValueFromArray(item) : item
		);
	};

	const filteredValueFromObj = (object) => {
		for (const [key, value] of Object.entries(object)) {
			if (!value) {
				delete object[key];
			}

			if (Array.isArray(value)) {
				object[key] = filteredValueFromArray(value);
			} else if (value && typeof value === "object") {
				object[key] = filteredValueFromObj(value);
			}
		}
		return object;
	};

	if (Array.isArray(obj)) {
		return filteredValueFromArray(obj);
	} else if (obj && typeof obj === "object") {
		return filteredValueFromObj(obj);
	}

	return obj;
};

// Attempt 2:

var compactObject = function (obj) {
	const filteredValueFromArray = (array) => {
		let truthyValue = array.filter((item) => !!item);

		let result = truthyValue.map((item) =>
			Array.isArray(item)
				? filteredValueFromArray(item)
				: item && typeof item === "object"
				? filteredValueFromObj(item)
				: item
		);

		return result;
	};

	const filteredValueFromObj = (object) => {
		for (const [key, value] of Object.entries(object)) {
			if (!value) {
				delete object[key];
				continue;
			}

			if (Array.isArray(value)) {
				object[key] = filteredValueFromArray(value);
			} else if (value && typeof value === "object") {
				object[key] = filteredValueFromObj(value);
			}
		}
		return object;
	};

	if (Array.isArray(obj)) {
		return filteredValueFromArray(obj);
	} else if (obj && typeof obj === "object") {
		return filteredValueFromObj(obj);
	}

	return obj;
};

//What was not working before? I considered objects can have array and objects but did not consider that arrays can have objects inside an array along with arrays.
