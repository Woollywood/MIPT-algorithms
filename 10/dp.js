function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function dpFib(n) {
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
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
}

module.exports = { fib, dpFib, tragNum: countTrajectories };
