// ==UserScript==
// @name         Outlook ad sidebar
// @namespace    https://www.outlook.live.com/
// @version      0.1
// @description  eliminate Outlook ad sidebar
// @author       Sam Gluss
// @match        https://outlook.live.com/*
// @grant        none
// ==/UserScript==

let deleted = false

function removeSidebar() {
    let selector = "//div[contains(@aria-label, \"Command toolbar\")]/parent::div/following-sibling::div"
    let addDiv = document.evaluate(selector, document, null, XPathResult.ANY_TYPE, null).iterateNext()

    if (!addDiv) {
        console.log("Checking for ad sidebar")
        setTimeout(removeSidebar, 100)
        return
    }
    console.log("Found sidebar, Deleting!")
    addDiv.remove()
}

(function() {
    'use strict';

    window.addEventListener('load', removeSidebar, false )
})();

