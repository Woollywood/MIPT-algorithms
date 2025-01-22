const sort = require('./sort');

test('Quick sort', () => {
	expect(sort.qSort([6, 5, 8, 3, 2, 1])).toEqual([1, 2, 3, 5, 6, 8]);
	expect(sort.qSort([1])).toEqual([1]);
	expect(sort.qSort([1, 2])).toEqual([1, 2]);
	expect(sort.qSort([2, 1])).toEqual([1, 2]);
	expect(sort.qSort([1, 2, 3, 4, 7, 6])).toEqual([1, 2, 3, 4, 6, 7]);
});

test('Merge sort', () => {
	expect(sort.mergeSort([6, 5, 8, 3, 2, 1])).toEqual([1, 2, 3, 5, 6, 8]);
	expect(sort.mergeSort([1])).toEqual([1]);
	expect(sort.mergeSort([1, 2])).toEqual([1, 2]);
	expect(sort.mergeSort([2, 1])).toEqual([1, 2]);
	expect(sort.mergeSort([1, 2, 3, 4, 7, 6])).toEqual([1, 2, 3, 4, 6, 7]);
});

test('Check sorted', () => {
	expect(sort.checkSorted([1, 2, 3, 4, 5, 6])).toEqual(true);
	expect(sort.checkSorted([2, 1, 3, 4, 5, 6])).toEqual(false);
	expect(sort.checkSorted([6, 5, 4, 3, 2, 1], false)).toEqual(true);
	expect(sort.checkSorted([5, 6, 4, 3, 2, 1], false)).toEqual(false);
});
