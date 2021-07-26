// ==UserScript==
// @name         Godspeed
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over SIAK War!
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit
// @grant        none
// ==/UserScript==

async function elementReady(selector) {
  return new Promise((resolve, reject) => {
    let el = document.querySelector(selector);
    if (el) {
        resolve(el);
    }
    if (document.title.includes("tidak") || document.head.textContent.includes("System Message")) {
        window.location = "https://academic.ui.ac.id/main/Authentication/Logout";
    }
    new MutationObserver((mutationRecords, observer) => {
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve(element);
        observer.disconnect();
      });
    })
      .observe(document.documentElement, {
        childList: true,
        subtree: true
      });
  });
}

elementReady("form")
  .then(() => {
    let arr = []; // Insert course codes here with format "<classcode>-<number of credit/SKS>"
    let buttons = [...document.querySelectorAll("input[type=radio]")]
    if (buttons.filter((b) => b.checked == true).length == 0) { // Already filled handler
      buttons.forEach((b) => {
        if (arr.includes(b.value)) b.click();
      })
    } // TODO: Add conditional chaining
    document.querySelector('input[type="submit"]').click();
  });
