// ==UserScript==
// @name            bondage-college-cheats
// @namespace       bondage-college
// @include         http://ben987.x10host.com/*
// @version         1
// @grant           none
// ==/UserScript==

function inject() {
    var script = document.createElement("script");
    script.src = "https://tasadar2.github.io/Bondage-College-Cheats/dist/cheater.js"
    document.body.appendChild(script);
}

window.addEventListener("load", function (e) {
    inject();
});