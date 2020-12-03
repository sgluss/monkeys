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
        let path = "//a[contains(@aria-label,'Sponsored')]"

        let node = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

        if (!node) {
            return null
        }

        if (node && window.getComputedStyle(node).display == "none") {
            // This is a legit post. Clear Facebook bullcrap and short circuit
            node.textContent = ""
            return null
        }

        return node
    }

    let delete_parent_element = (node) => {
        let step = node
        let id = node.id

        // Walk up the DOM to find the story element, that's what we'll delete
        while(step.parentNode.getAttribute("role") !== "feed") {
          step = step.parentNode
          id = step.id
        }

        step.parentNode.removeChild(step)
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
