// ==UserScript==
// @name            bondage-college-cheats
// @namespace       bondage-college
// @include         http://ben987.x10host.com/*
// @include         http://www.bondageprojects.elementfx.com/*
// @include         https://www.bondageprojects.elementfx.com/*
// @version         1
// @grant           none
// ==/UserScript==

function inject() {
    if (!window.location.href.includes("BondageClub")) {
        var script = document.createElement("script");
        script.src = "https://tasadar2.github.io/Bondage-College-Cheats/dist/cheater.js";
        document.body.appendChild(script);
    }
}

window.addEventListener("load", function (e) {
    inject();
});
