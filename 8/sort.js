function qSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[0];
	const left = array.filter((value) => value < pivot);
	const mid = array.filter((value) => value === pivot);
	const right = array.filter((value) => value > pivot);
	return [...qSort(left), ...mid, ...qSort(right)];
}

function merge(a, b) {
	const c = Array.from({ length: a.length + b.length });
	let i = 0,
		j = 0,
		k = 0;

	while (i < a.length && j < b.length) {
		a[i] <= b[j] ? (c[k++] = a[i++]) : (c[k++] = b[j++]);
	}
	while (i < a.length) {
		c[k++] = a[i++];
	}
	while (j < b.length) {
		c[k++] = b[j++];
	}

	return c;
}
function mergeSort(a) {
	if (a.length <= 1) {
		return a;
	}

	const mid = Math.floor(a.length / 2);
	const left = mergeSort(a.slice(0, mid));
	const right = mergeSort(a.slice(mid, a.length));
	return merge(left, right);
}

function checkSorted(a, ascending = true) {
	for (let i = 0; i < a.length - 1; i++) {
		if ((ascending && a[i] > a[i + 1]) || (!ascending && a[i] < a[i + 1])) {
			return false;
		}
	}
	return true;
}

module.exports = { qSort, mergeSort, checkSorted };
