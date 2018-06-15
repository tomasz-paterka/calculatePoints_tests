const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('normal hill', () => {
		it('less than k point', () => {
			const actual = calculateTotalPoints(93, 'normal', 98, [17.0, 16.5, 17.0, 17.0, 17.0], -8.6, 6.4);

			const expected = 98.8;

			assert.equal(actual, expected);
		});

		it('more than k point', () => {
			const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2);

			const expected = 131.8;

			assert.equal(actual, expected);
		});

		it('equal than k point', () => {
			const actual = calculateTotalPoints(98, 'normal', 98, [17.0, 17.0, 17.5, 18.0, 17.5], -8.5, 0);

			const expected = 103.5;

			assert.equal(actual, expected);
		});
	});

	describe('large hill', () => {
		it('less than k point', () => {
			const actual = calculateTotalPoints(117, 'large', 120, [17.5, 18.5, 17.5, 17.0, 17.5], -1.4, 0);

			const expected = 105.7;

			assert.equal(actual, expected);
		});

		it('more than k point', () => {
			const actual = calculateTotalPoints(134, 'large', 120, [19.0, 20.0, 19.5, 19.0, 18.5], -5.4, 0);

			const expected = 137.3;

			assert.equal(actual, expected);
		});

		it('equal than k point', () => {
			const actual = calculateTotalPoints(120, 'large', 120, [17.5, 17.0, 17.0, 17.5, 17.5], -4.8, 0);

			const expected = 107.2;

			assert.equal(actual, expected);
		});
	});

	describe('flying hill', () => {
		it('less than k point', () => {
			const actual = calculateTotalPoints(194, 'flying', 200, [17.0, 16.5, 16.0, 16.5, 16.5], -2.0, 0);

			const expected = 160.3;

			assert.equal(actual, expected);
		});

		it('more than k point', () => {
			const actual = calculateTotalPoints(227.5, 'flying', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

			const expected = 208.3;

			assert.equal(actual, expected);
		});

		it('equal than k point', () => {
			const actual = calculateTotalPoints(200, 'flying', 200, [17.0, 17.0, 17.5, 17.0, 17.0], -4.5, 0);

			const expected = 166.5;

			assert.equal(actual, expected);
		});
	});
});