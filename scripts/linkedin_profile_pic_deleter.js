// ==UserScript==
// @name         linkedin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove profile pic
// @author       Sam Gluss
// @match        https://www.linkedin.com/recruiter/review*
// @grant        none
// ==/UserScript==

function runCleaner() {
    // wipe profile pic
    image = document.evaluate( "//img[contains(@alt, 'Profile photo')]", document, null, XPathResult.ANY_TYPE, null).iterateNext();
    image.parentNode.removeChild(image)
}

(function() {
    'use strict';
    // Your code here...
    window.addEventListener('load', runCleaner, false )
})();

