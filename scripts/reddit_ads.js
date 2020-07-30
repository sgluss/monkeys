// ==UserScript==
// @name         Reddit Remove feed ads
// @namespace    https://www.reddit.com/
// @version      0.1
// @description  Removes ads from reddit feed
// @author       Sam Gluss
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let findAndDeleteAd = () => {
	    let selector = "//span[text()='promoted']"
	    let promotedSpan = document.evaluate(selector, document, null, XPathResult.ANY_TYPE, null).iterateNext()

	    if (!promotedSpan) {
	    	return null
	    }

	    let promotedContainer = promotedSpan.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
	    promotedContainer.remove()

	    // look for the next ad
	    findAndDeleteAd()
    }

    let init = () => {
        setInterval(findAndDeleteAd, 1000)
    }

    window.addEventListener('load', init, false)

})();
