// ==UserScript==
// @name         Godspeed
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over SIAK War!
// @author       Dennis Walangadi
// @match        https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit
// @match        http://127.0.0.1:8080/Pengisian%20IRS%20-%20Dennis%20Al%20Baihaqi%20Walangadi%20(1906400141)%3B%20Kurikulum%2009.00.12.01-2016%20-%20SIAK%20NG.html
// @match        http://127.0.0.1:4000/Penambahan+IRS+-+Dennis+Al+Baihaqi+Walangadi+%281906400141%29%3B+Kurikulum+09.00.12.01-2016+-+SIAK+NG.html
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

let t2;

elementReady("form")
  .then(() => {
    t2 = performance.now();
    let arr = ["619906-3", "619869-4", "619933-3"];
    [...document.querySelectorAll("input[type=radio]")].forEach((b) => {
      if (arr.includes(b.value)) b.click();
    })
  })
  .then(document.querySelector('input[type="submit"]'))
  .then(() => console.log(performance.now() - t2));
