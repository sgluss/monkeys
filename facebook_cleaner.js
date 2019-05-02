// ==UserScript==
// @name         Facebook Goodbye Sponsored
// @namespace    https://www.facebook.com/
// @version      0.1
// @description  eliminate Facebook sponsored posts
// @author       Sam Gluss
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let get_next_node = () => {
        // Use the 'S' in Sponsored as an anchor for the ad
        let path = "//b[text()='S']"
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    }

    let delete_parent_element = (node) => {
        let parent = node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        parent.parentNode.removeChild(parent)
    }

    let run_cleaner = () => {
        while (true) {
            let node = get_next_node()

            if (node == null) {
                return
            } else {
                console.log('cleaning!')
                delete_parent_element(node)
            }
        }
    }

    let init = () => {
        setInterval(run_cleaner, 1000)
    }

    window.addEventListener('load', init, false)

})();

