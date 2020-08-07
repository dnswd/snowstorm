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
    //window.location = 'http://127.0.0.1:4000/Penambahan+IRS+-+Dennis+Al+Baihaqi+Walangadi+%281906400141%29%3B+Kurikulum+09.00.12.01-2016+-+SIAK+NG.html';
})();
}, 150);
