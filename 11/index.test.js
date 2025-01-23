const subsequence = require('./index');

test('Largest common subsequence', () => {
	expect(subsequence.lcs([1, 2, 3], [1, 2, 3])).toBe(3);
	expect(subsequence.lcs([1, 3], [1, 2, 3])).toBe(2);
	expect(subsequence.lcs([1, 2, 3], [1, 3])).toBe(2);
	expect(subsequence.lcs([1], [1])).toBe(1);
	expect(subsequence.lcs([], [1, 2, 3])).toBe(0);
	expect(subsequence.lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(6);
	expect(subsequence.lcs([1, 2, 3, 4, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(subsequence.lcs([1, 2, 3, 4, 6, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(subsequence.lcs([1, 2, 3, 4, 7, 6], [1, 2, 3, 4, 5, 6])).toBe(5);
	expect(subsequence.lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 6, 6])).toBe(5);
	expect(subsequence.lcs([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 6])).toBe(5);
});

test('Grand icrease subsequence', () => {
	expect(subsequence.gis([1, 2, 3])).toBe(3);
	expect(subsequence.gis([1, 1, 3])).toBe(2);
	expect(subsequence.gis([2, 1, 3])).toBe(2);
	expect(subsequence.gis([1])).toBe(1);
	expect(subsequence.gis([])).toBe(0);
	expect(subsequence.gis([1, 5, 3])).toBe(2);
});
