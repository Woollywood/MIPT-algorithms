const dp = require('./dp');

test('Fib', () => {
	expect(dp.fib(5)).toBe(5);
	expect(dp.fib(8)).toBe(21);
});

test('dp Fib', () => {
	expect(dp.dpFib(5)).toBe(5);
	expect(dp.dpFib(8)).toBe(21);
});
