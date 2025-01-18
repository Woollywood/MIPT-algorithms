function insertSort(array) {
	const copy = array.slice();

	for (let i = 1; i < copy.length; i++) {
		for (let j = i; j > 0 && copy[j - 1] > copy[j]; j--) {
			const temp = copy[j];
			copy[j] = copy[j - 1];
			copy[j - 1] = temp;
		}
	}

	return copy;
}

function choiseSort(array) {
	const copy = array.slice();

	for (let i = 0; i < copy.length - 1; i++) {
		for (let j = i + 1; j < copy.length; j++) {
			if (copy[j] < copy[i]) {
				const temp = copy[j];
				copy[j] = copy[i];
				copy[i] = temp;
			}
		}
	}

	return copy;
}

function bubbleSort(array) {
	const copy = array.slice();

	for (let i = 1; i < copy.length; i++) {
		for (let j = 0; j < copy.length - i; j++) {
			if (copy[j] > copy[j + 1]) {
				const temp = copy[j + 1];
				copy[j + 1] = copy[j];
				copy[j] = temp;
			}
		}
	}

	return copy;
}

module.exports = { insertSort, choiseSort, bubbleSort };
