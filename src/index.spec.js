import { isMac, isChrome, isFF, isSafari } from './index';

describe('noOSXOverscroll should detect whether or not a user is on a Mac', function() {
	
	const uA = navigator.userAgent;

	beforeEach(() => {
		this.mac = isMac(uA);
	});

	it('should return -1 if the user is not on a Mac', () => {

		if (!uA.match(/Macintosh/)) {
			expect(this.isMac).toEqual(-1);
		}

	})

	it('should set this.isMac to true if user is on a Mac', () => {

		if (uA.match(/Macintosh/)) {
			expect(this.isMac).not.toEqual(-1);
		}

	})

})

describe('If the user is on a Mac, noOSXOverscroll should detect if the user in Chrome', function() {

	beforeEach(() => {
		this.uA = navigator.userAgent;
		this.chrome = isChrome(this.uA);
		this.ff = isFF(this.uA);
		this.safari = isSafari(this.uA);	
	});

	it('should set ff to false is user is in Chrome', () => {

		if (this.chrome) {
			expect(this.chrome).toBe(true);
			expect(this.ff).toBe(false);
			expect(this.safari).toBe(true);
		}

	})

})

describe('noOSXOverscroll should allow user to scroll right', () => {

})

describe('noOSXOverscroll should allow user to scroll left', () => {

})

describe('noOSXOverscroll should restrict user from scroll left off screen', () => {

})