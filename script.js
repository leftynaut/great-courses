// ==UserScript==
// @name         Great Courses OOS
// @namespace    http://lefkowitz.me/
// @version      0.1
// @description  Pulls first item in shopping cart, displays that item as OOS alongside addtional information
// @author       Michael Lefkowitz
// @match        http://www.thegreatcourses.com/category/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Script running');

    // gets first "li" in the cart-sidebar "ol"
    const firstItem = document.getElementById("cart-sidebar").firstElementChild;
    console.log(firstItem);

    // finds the "a" tag in first "li", then get its "title" attribute
    const firstItemTitle = firstItem.getElementsByTagName("a")[0].getAttribute("title");
    console.log(firstItemTitle);
    // get full price of item
      // if item isn't on sale, show full price and fake coupon
      // if item is on sale, show full price and sale price


    $.get(`http://localhost:3000/search/${firstItemTitle}`, (data) => {
      alert(data);
    });

})();
