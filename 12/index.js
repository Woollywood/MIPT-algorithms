function levenstein(a, b) {
	const c = Array.from({ length: a.length + 1 }).map((_, i) =>
		Array.from({ length: b.length + 1 }).map((_, j) => (i * j === 0 ? i + j : 0))
	);

	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			if (a[i - 1] === b[j - 1]) {
				c[i][j] = c[i - 1][j - 1];
			} else {
				c[i][j] = 1 + Math.min(c[i - 1][j], c[i][j - 1], c[i - 1][j - 1]);
			}
		}
	}

	return c[a.length][b.length];
}

function substring(a) {
	if (a.length <= 1) {
		return 0;
	}

	const S = a.slice();
	const Pi = Array.from({ length: S.length }).fill(0);
	for (let i = 1; i < S.length; i++) {
		let p = Pi[i - 1];
		while (p > 0 && S[i] != S[p]) {
			p = Pi[p - 1];
		}
		if (S[i] === S[p]) {
			p++;
		}
		Pi[i] = p;
	}
	return Pi[S.length - 1];
}

module.exports = { levenstein, substring };
