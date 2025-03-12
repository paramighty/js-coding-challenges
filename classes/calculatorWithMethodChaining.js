/**
 * LeetCode Problem: Calculator with Method Chaining

 * Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.
* Your Calculator class should have the following methods:
* add - This method adds the given number value to the result and returns the updated Calculator.
* subtract - This method subtracts the given number value from the result and returns the updated Calculator.
* multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
* divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
* power - This method raises the result to the power of the given number value and returns the updated Calculator.
* getResult - This method returns the result.
* Solutions within 10-5 of the actual result are considered correct.
 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class Calculator {
	constructor(value) {
		this.value = value;
	}

	add(value) {
		this.value += value;
		return this;
	}

	subtract(value) {
		this.value -= value;
		return this;
	}

	multiply(value) {
		this.value *= value;
		return this;
	}

	divide(value) {
		if (value === 0) {
			throw new Error("Division by zero is not allowed");
		}

		this.value /= value;
		return this;
	}

	power(value) {
		this.value **= value;
		return this;
	}

	getResult() {
		return this.value;
	}
}

/*Example 1:

Input: 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
Output: 8
Explanation: 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8 */
