const dp = require('./dp');

test('Fib', () => {
	expect(dp.fib(5)).toBe(5);
	expect(dp.fib(8)).toBe(21);
});

test('Fib with cache', () => {
	expect(dp.fibWithCache(5)).toBe(5);
	expect(dp.fibWithCache(8)).toBe(21);
});

test('dp Fib', () => {
	expect(dp.dpFib(5)).toBe(5);
	expect(dp.dpFib(8)).toBe(21);
});

test('Count min cost', () => {
	expect(dp.countMinCost(5, [null, 0, 2, 1, 1, 1])).toBe(2);
	expect(dp.countMinCost(7, [null, 0, 2, 1, 1, 1, 1, 2])).toBe(4);
});
