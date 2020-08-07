// ==UserScript==
// @name         TacticalLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Login in a matter of (milli)second!
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/main/Authentication/
// @grant        none
// ==/UserScript==

document.getElementById('u').value="username";
document.getElementsByName('p')[0].value="password";
document.querySelector('input[type="submit"]').click();