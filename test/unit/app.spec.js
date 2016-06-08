describe('app', function () {
	'use strict';
	var answer = window.app;
	describe('calculateArea', function () {
		it('should return false if the first parametr is not a number', function () {
			expect(answer.calculateArea('notanumber', 12, 33, 'welldone', 'wrong')).toBe(false);
		});
		it('should return false if the second parametr is not a number', function () {
			expect(answer.calculateArea(333, 'notanumber', 1, 'welldone', 'wrong')).toBe(false);
		});
		it('should return false if the third parametr is not a number', function () {
			expect(answer.calculateArea(76, 3, 'notanumber', 'welldone', 'wrong')).toBe(false);
		});
		it('should return false if the messageSuccess is not a string', function () {
			expect(answer.calculateArea(2, 3, 44, 16, 'wrong')).toBe(false);
		});
		it('should return false if the messageError is not a string', function () {
			expect(answer.calculateArea(12, 33, 91, 'welldone', 101)).toEqual(false);
		});
		it('should calculate area with messageSuccess if all the given parameters are correct', function () {
			expect(answer.calculateArea(7,2,1, 'welldone', 'wrong')).toEqual({area: 5, message: 'welldone'});
		});
		it('should calculate area with messageError if the area is less than 0', function () {
			expect(answer.calculateArea(22,2,44,'welldone','wrong')).toEqual({ area : -66, message : 'wrong' });
		});
		it('should return area 0 and message if all given numbers are 0', function () {
			expect(answer.calculateArea(0,0,0,'welldone','wrong')).toEqual({ area : 0, message : 'Big null' });
		});
	});
});