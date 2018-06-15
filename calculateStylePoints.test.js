const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('diffrent notes', () => {
		const actual = calculateStylePoints([15.5, 18.5, 19, 14, 16]);

		const expected = 50;

		assert.equal(actual, expected);
	});
	
	it('same notes', () => {
		const actual = calculateStylePoints([15, 15, 15, 15, 15]);

		const expected = 45;

		assert.equal(actual, expected);
	});
	
	
	it('few same notes', () => {
		const actual = calculateStylePoints([18.5, 19.5, 18.5, 19.0, 18.5]);

		const expected = 56;

		assert.equal(actual, expected);
	});
});