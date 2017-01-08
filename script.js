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
    console.log(`${firstItemTitle} is almost out of stock!`);

    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:3000/search/${firstItemTitle}`, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            if (data.price) {
              // if item is on sale, show full price and sale price
              console.log(`Get it now while it's on sale for $${data.price}!`);
              console.log(`before it goes back to the orignal price of $${data.top}`);
            } else {
              // if item isn't on sale, show full price and fake coupon
              console.log(`Grab it now with a 20% off coupon code - SAVENOW20`);
              const currentPrice = firstItem.querySelector(".price").innerHTML.slice(1);
              console.log(`bringing your price down to $${+currentPrice * 0.8} from the original price of $${currentPrice}`);
            }
        } else {
            console.log('Error!');
        }
    };

    request.onerror = () => {
        console.log('There was a connection error!');
    };

    request.send();

})();
