function lcs(a, b) {
	const f = Array.from({ length: a.length + 1 }).map(() => Array.from({ length: b.length + 1 }).fill(0));
	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			if (a[i - 1] === b[j - 1]) {
				f[i][j] = 1 + f[i - 1][j - 1];
			} else {
				f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]);
			}
		}
	}

	return f[a.length][b.length];
}

function gis(a) {
	const f = Array.from({ length: a.length + 1 }).fill(0);
	for (let i = 1; i <= a.length; i++) {
		let m = 0;
		for (let j = 0; j < i; j++) {
			if (a[i - 1] > a[j - 1] && f[j] > m) {
				m = f[j];
			}
		}
		f[i] = m + 1;
	}

	return f[a.length];
}

module.exports = { lcs, gis };
