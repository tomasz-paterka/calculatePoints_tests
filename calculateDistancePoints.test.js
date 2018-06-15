const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('normal hill', () => {
		it('less than k point', () => {
			const actual = calculateDistancePoints(93, 'normal', 98);
			
			const expected = 50;
			
			assert.equal(actual, expected);
		});
		
		it('more than k point', () => {
			const actual = calculateDistancePoints(111, 'normal', 98);

			const expected = 86;

			assert.equal(actual, expected);
		});
		
		it('equal than k point', () => {
			const actual = calculateDistancePoints(98, 'normal', 98);

			const expected = 60;

			assert.equal(actual, expected);
		});
	});
	
	describe('large hill', () => {
		it('less than k point', () => {
			const actual = calculateDistancePoints(117, 'large', 120);

			const expected = 54.6;

			assert.equal(actual, expected);
		});

		it('more than k point', () => {
			const actual = calculateDistancePoints(134, 'large', 120);

			const expected = 85.2;

			assert.equal(actual, expected);
		});

		it('equal than k point', () => {
			const actual = calculateDistancePoints(120, 'large', 120);

			const expected = 60;

			assert.equal(actual, expected);
		});
	});
	
	describe('flying hill', () => {
		it('less than k point', () => {
			const actual = calculateDistancePoints(194, 'flying', 200);

			const expected = 112.8;

			assert.equal(actual, expected);
		});

		it('more than k point', () => {
			const actual = calculateDistancePoints(227.5, 'flying', 200);

			const expected = 153;

			assert.equal(actual, expected);
		});

		it('equal than k point', () => {
			const actual = calculateDistancePoints(200, 'flying', 200);

			const expected = 120;

			assert.equal(actual, expected);
		});
	});
	
	describe('wrong hill size', () => {
		it('test', () => {
			const actual = calculateDistancePoints(150, 'test', 200);

			const expected = 'Wrong hill size';

			assert.equal(actual, expected);
		});
	});
});