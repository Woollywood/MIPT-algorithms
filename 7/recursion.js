function grandCommonDivider(a, b) {
	return b === 0 ? a : grandCommonDivider(b, a % b);
}

function pow(a, n = 2) {
	if (n === 0) {
		return 1;
	}

	if (n % 2 === 1) {
		return pow(a, n - 1) * a;
	}

	return pow(a ** 2, n / 2);
}

module.exports = { grandCommonDivider, pow };
