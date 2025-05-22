/**
 * LeetCode Problem: Counter II
 * https://leetcode.com/problems/counter-ii
 * Difficulty: Easy
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.


 


 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var createCounter = function (init) {
	let x = {
		init,
	};
	let clone = Object.assign({}, x);

	function increment() {
		return ++init;
	}

	function decrement() {
		return --init;
	}

	function reset() {
		return (init = clone.init);
	}

	return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
