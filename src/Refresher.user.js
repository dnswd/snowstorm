// ==UserScript==
// @name         Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refreshes the page every 2 second.
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/*
// @grant        none
// ==/UserScript==

if (
    (document.getElementsByClassName("container")[0].innerHTML.indexOf("Sistem SIAKNG saat ini tidak dapat diakses. Silakan mencoba beberapa saat lagi." !== -1)) || (document.getElementsByTagName("p")[0].innerText.includes("Maaf, server"))
) {
    setTimeout(function() {
        window.location.reload(1);
    }, 2000);
}