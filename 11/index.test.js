const { king, lcs, gis } = require('./index');

test('King', () => {
	expect(king(1, 1)).toBe(1);
	expect(king(2, 2)).toBe(2);
	expect(king(3, 3)).toBe(6);
	expect(king(4, 4)).toBe(20);
	expect(king(5, 5)).toBe(70);
});

test('Largest common subsequence', () => {
	expect(lcs([1, 2, 3], [1, 2, 3])).toBe(3);
	expect(lcs([1, 3], [1, 2, 3])).toBe(2);
	expect(lcs([1, 2, 3], [1, 3])).toBe(2);
	expect(lcs([1], [1])).toBe(1);
	expect(lcs([], [1, 2, 3])).toBe(0);
	expect(lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(6);
	expect(lcs([1, 2, 3, 4, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(lcs([1, 2, 3, 4, 6, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(lcs([1, 2, 3, 4, 7, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 6, 6])).toBe(5);
	expect(lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 6])).toBe(5);
});

test('Grand icrease subsequence', () => {
	expect(gis([1, 2, 3])).toBe(3);
	expect(gis([1, 1, 3])).toBe(2);
	expect(gis([2, 1, 3])).toBe(2);
	expect(gis([1])).toBe(1);
	expect(gis([])).toBe(0);
	expect(gis([1, 5, 3])).toBe(2);
});
