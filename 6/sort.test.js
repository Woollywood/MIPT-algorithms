const sort = require('./sort');

test('Insert sort', () => {
	expect(sort.insertSort([4, 3, 5, 2, 1])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.insertSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.insertSort([2, 1])).toEqual([1, 2]);
	expect(sort.insertSort([1, 2])).toEqual([1, 2]);
	expect(sort.insertSort([1])).toEqual([1]);
});

test('Choise sort', () => {
	expect(sort.choiseSort([4, 3, 5, 2, 1])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.choiseSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.choiseSort([2, 1])).toEqual([1, 2]);
	expect(sort.choiseSort([1, 2])).toEqual([1, 2]);
	expect(sort.choiseSort([1])).toEqual([1]);
});

test('Bubble sort', () => {
	expect(sort.bubbleSort([4, 3, 5, 2, 1])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.bubbleSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
	expect(sort.bubbleSort([2, 1])).toEqual([1, 2]);
	expect(sort.bubbleSort([1, 2])).toEqual([1, 2]);
	expect(sort.bubbleSort([1])).toEqual([1]);
});
