// ==UserScript==
// @name         Godspeed
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over SIAK War!
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit
// @grant        none
// ==/UserScript==

var checkExist = setInterval(function () {
  if (document.title.includes("tidak") || document.head.textContent.includes("System Message")) {
    window.location = "https://academic.ui.ac.id/main/Authentication/Logout";
    clearInterval(checkExist);
    return;
  } else if (document.querySelector('form')) {
    let arr = []; // Insert course codes here with format "<classcode>-<number of credit/SKS>"
    let buttons = [...document.querySelectorAll("input[type=radio]")]
    if (buttons.filter((b) => b.checked == true).length == 0) { // Already filled handler
      buttons.forEach((b) => {
        if (arr.includes(b.value)) b.click();
      })
    } else {
      console.log('FILLED')
    }
    document.querySelector('input[type="submit"]').click()
    clearInterval(checkExist);
  } else {
    console.log('LOADING')
  }
}, 1);
