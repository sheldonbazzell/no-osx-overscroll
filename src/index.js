export const noOSXOverscroll = function () {

	const uA = navigator.userAgent;

	if (!isMac(uA)) { return -1; }

	const chrome = isChrome(uA)
	const ff = isFF(uA);
	const safari = isSafari(uA);

	if (chrome || ff || safari) {

		window.addEventListener('wheel', function (e) {

			/* detect wheel moving left and whether or not all parents of element
			are in original scroll position */ 
			const stopLeft = e.deltaX < 0 && notOriginalScroll(e.target).length === 0;

			if (stopLeft) e.preventDefault();

		}, false);
	}

}

export const notOriginalScroll = target => getParents(target).filter(el => el.scrollLeft > 0);

export const isMac = (uA) => uA.match(/Macintosh/);
export const isChrome = (uA) => uA.indexOf('Chrome') > -1;
export const isFF = (uA) => uA.indexOf('Firefox') > -1;
export const isSafari = (uA) => uA.indexOf('Safari') > -1;

export const getParents = function (el) {

	let parents = [];
	let p = el.parentNode;

	while (p !== document) {
		let o = p;
		parents.push(o);
		p = o.parentNode;
	}
	parents.push(document);

	return parents;
}