/**
 * LeetCode Problem: Join Two Arrays by ID

 * https://leetcode.com/problems/join-two-arrays-by-id/
 * Difficulty: Medium
 * 
	Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

Attempt - 1 
 *
 * Time Complexity: Time Limit Exceeded!
 * Space Complexity:
 */

var join = function (arr1, arr2) {
	let unmatchedItemsFromArr2 = [...arr2];

	let modifiedArr1 = arr1.map((currentItemArr1) => {
		// Map through arr1

		let firstItemArr1 = Object.values(currentItemArr1);
		let currentItemId = firstItemArr1[0];

		// Find matching currentItemArr1 in arr2
		let arr2sit = arr2.find((arr2Item) => {
			let firstItemArr2 = Object.values(arr2Item);
			let arr2ItemId = firstItemArr2[0];

			let isMatch = arr2ItemId === currentItemId;

			//If matched then merge the arr2 values with arr1 and then remove/filterout the corresponding arr2item
			if (isMatch) {
				let replaceObject = Object.assign(currentItemArr1, arr2Item);
				unmatchedItemsFromArr2 = unmatchedItemsFromArr2.filter(
					(i) => i !== arr2Item
				);
			}
		});
		return currentItemArr1;
	});

	return modifiedArr1
		.concat(unmatchedItemsFromArr2)
		.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]); // Sort by first value (ID)

	// let res =  a1.concat(a2).sort((a, b) => a - b);
};
