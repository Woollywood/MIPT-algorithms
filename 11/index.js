function king(n, m) {
	const c = Array.from({ length: n + 1 }).map(() => Array.from({ length: m + 1 }).fill(0));
	c[1][1] = 1;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (i === 1 && j === 1) {
				continue;
			}
			c[i][j] = c[i - 1][j] + c[i][j - 1];
		}
	}

	return c[n][m];
}

function lcs(a, b) {
	const c = Array.from({ length: a.length + 1 }).map(() => Array.from({ length: b.length + 1 }).fill(0));

	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			if (a[i - 1] === b[j - 1]) {
				c[i][j] = 1 + c[i - 1][j - 1];
			} else {
				c[i][j] = Math.max(c[i - 1][j], c[i][j - 1]);
			}
		}
	}

	return c[a.length][b.length];
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

module.exports = { lcs, gis, king };
