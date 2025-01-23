function binarySearch(a, key) {
	let left = -1,
		right = a.length;

	while (right - left > 1) {
		const mid = Math.floor((left + right) / 2);
		const guess = a[mid];
		console.log({ left, right, guess });

		if (guess < key) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return left;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
// console.log(binarySearch([1, 2, 3, 3, 4, 5, 6], 3));

module.exports = { binarySearch };
