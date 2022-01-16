// ==UserScript==
// @name         TacticalRedirection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect to course registration page after login.
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/main/Welcome/
// @grant        none
// ==/UserScript==

setTimeout(function(){
   (async () => {
    window.location = 'https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit';
})();
}, 150);
