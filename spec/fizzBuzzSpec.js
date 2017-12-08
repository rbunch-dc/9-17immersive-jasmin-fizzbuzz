// FizzBuzz
// - print the numbers 1-100
// - If the number is divisible by 3, print fizz instead of the number
// - If the number is divisible by 5, print buzz instead of the number
// - If the number is divisible by 3 & 5, print fizzbuzz instead of the number

// 1 = 1
// 2 = 2
// 3 = fizz
// 4 = 4
// 5 = buzz
// 6 = fizz
// 9 = fizz
// 10 = buzz
// 15 = fizzbuzz

describe("FizzBuzz Unit Tests", ()=>{
	// here is where we start writing the tests for THIS suite
	// we write a test by starting with "it"
	// "it" takes 2 args
	// 1. Name of the test
	// 2. The function to run (which is the test)
	it("FizzBuzz must be defined", ()=>{
		// expect takes 1 arg... something to evaluate
		// we chain a method on expect.
		expect(fizzBuzz()).toBeDefined();
	})
})