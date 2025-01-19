const recursion = require('./recursion');

test('Grand common divider', () => {
	expect(recursion.grandCommonDivider(4, 6)).toBe(2);
	expect(recursion.grandCommonDivider(3, 6)).toBe(3);
	expect(recursion.grandCommonDivider(6, 4)).toBe(2);
	expect(recursion.grandCommonDivider(6, 3)).toBe(3);
	expect(recursion.grandCommonDivider(6, 6)).toBe(6);
	expect(recursion.grandCommonDivider(1, 1)).toBe(1);
	expect(recursion.grandCommonDivider(1, 2)).toBe(1);
});

test('Pow', () => {
	expect(recursion.pow(1)).toBe(1);
	expect(recursion.pow(2)).toBe(4);
	expect(recursion.pow(3)).toBe(9);
	expect(recursion.pow(1, 3)).toBe(1);
	expect(recursion.pow(2, 3)).toBe(8);
	expect(recursion.pow(4, 3)).toBe(64);
	expect(recursion.pow(2, 8)).toBe(256);
	expect(recursion.pow(-2)).toBe(4);
	expect(recursion.pow(-2, 3)).toBe(-8);
	expect(recursion.pow(6, 0)).toBe(1);
});
