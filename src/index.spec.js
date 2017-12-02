import { isMac, noOSXOverscroll, isChrome, isFF, isSafari } from './index';

describe('noOSXOverscroll should detect whether or not a user is on a Mac', () => {

	it('should return -1 if the user is not on a Mac', () => {

		const x = isMac(navigator.userAgent);

		if (!x) {
			expect(noOSXOverscroll()).toEqual(-1);
		}

	})

})

describe('If the user is on a Mac, noOSXOverscroll should detect if the user in Chrome', () => {

	beforeEach(() => {
		this.uA = navigator.userAgent
		this.chrome = isChrome(this.uA);
		this.ff = isFF(this.uA);
		this.safari = isSafari(this.uA);
	});

	it('should set ff and safari to false is user is in Chrome', () => {

		if (this.chrome) {
			expect(this.ff).toBe(false);
			expect(this.safari).toBe(false);
		}

	})

	it('should set chrome and safari to false is user is in FF', () => {


		if (this.ff) {
			expect(this.chrome).toBe(false);
			expect(this.safari).toBe(false);
		}

	})

	it('should set ff and chrome to false is user is in Chrome', () => {

		if (this.safari) {
			expect(this.chrome).toBe(false);
			expect(this.ff).toBe(false);
		}

	})

})

describe('noOSXOverscroll should allow user to scroll right', () => {

})

describe('noOSXOverscroll should allow user to scroll left', () => {

})

describe('noOSXOverscroll should restrict user from scroll left off screen', () => {

})