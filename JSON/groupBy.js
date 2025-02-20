/*
	* LeetCode Problem: Group By
 	* https://leetcode.com/problems/group-by
 	* Difficulty: Medium

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

 * Time Complexity: O(N)
 * Space Complexity: O(N)

*/

Array.prototype.groupBy = function (fn) {
	// Use reduce to iterate over the array and create the object
	return this.reduce((acc, item) => {
		let key = fn(item);

		if (!acc[key]) {
			acc[key] = []; //if key does not exist, initialize an array
		}
		acc[key].push(item); ////if key does exist, push that item in the array
		return acc; // Return the updated accumulator for the next iteration
	}, {}); // Initialize the accumulator as an empty object
};

/*Example 1:

Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array*/
