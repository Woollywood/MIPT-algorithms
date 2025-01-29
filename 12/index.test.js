const { levenstein, substring } = require('./index');

test('Levenstein', () => {
	expect(levenstein('', '')).toBe(0);
	expect(levenstein('Привет, мир!', '')).toBe(12);
	expect(levenstein('колокол', 'молоко')).toBe(2);
	expect(levenstein('колокол', 'молококо')).toBe(3);
});

test('substring', () => {
	expect(substring('')).toBe(0);
	expect(substring('a')).toBe(0);
	expect(substring('aa')).toBe(1);
	expect(substring('abcabc')).toBe(3);
	expect(substring('ababab')).toBe(4);
});
