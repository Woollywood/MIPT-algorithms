function fib(n) {
	return n <= 1 ? n : fib(n - 2) + fib(n - 1);
}

const cache = new Map();

function fibWithCache(n) {
	if (n <= 1) {
		return n;
	}

	if (cache.has(n)) {
		return cache.get(n);
	}

	const result = fibWithCache(n - 2) + fibWithCache(n - 1);
	cache.set(n, result);
	return result;
}

function dpFib(n) {
	const fib = [...[0, 1], ...Array.from({ length: n - 1 })];

	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib[n];
}

function countTrajectories(n, allowed) {
	const k = [0, 1, +allowed[2]];
	for (let i = 3; i <= n; i++) {
		if (allowed[i]) {
			k[i] = k[i - 1] + k[i - 2] + k[i - 3];
		}
	}

	return k[n];
}

function countMinCost(n, price) {
	const c = [null, price[1], price[1] + price[2], ...Array.from({ length: n - 2 })];
	for (let i = 3; i <= n; i++) {
		c[i] = price[i] + Math.min(c[i - 1], c[i - 2]);
	}

	return c[n];
}

module.exports = { fib, fibWithCache, dpFib, tragNum: countTrajectories, countMinCost };
