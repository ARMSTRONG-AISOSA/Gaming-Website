// 'use strict' is a JavaScript directive that enables strict mode and when enabled, certain JavaScript behaviors are modified or restricted, leading to safer and more optimized code.


// =======================
// Navigation Bar
// =======================

'use strict';
// Ul list
const navbar = document.querySelector('[data-navbar]');
// navbar links
const navbarLinks = document.querySelectorAll('[data-nav-link]');
// navbtn
const navbarToggler = document.querySelector('[data-nav-toggler]');



// navbar.classList.toggle('active'): It toggles the presence of the 'active' class on the navbar element. 

// this.classList.toggle('active'): It toggles the presence of the 'active' class on the navbarToggler element itself. Similar to the previous line, it removes the class if it exists and adds it if it doesn't.

navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
});

// =========================================================================
// navbarToggler.onclick = function toggleNavbar() {
//     navbar.classList.toggle('active');
//     navbarToggler.classList.toggle('active');
// };
// ========================================================================

// This code sets up event listeners for a collection of elements with the class "navbarLinks". It iterates over each element in the collection and adds a click event listener. When any of these elements are clicked, the corresponding callback function is executed. Here's what the function does:


// FRESH CCODE
// ================================================================

// for (let i = 0; i < navbarLinks.length; i++) {
//     navbarLinks[i].addEventListener("click", function () {
//         navbar.classList.remove('active');
//         navbarToggler.classList.remove('active');
//     });
// };
// ================================================================


for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.toggle('active');
        navbarToggler.classList.toggle('active');
    });
};


// navbar.classList.toggle('active'): It toggles the presence of the 'active' class on the navbar element. 

// navbarToggler.classList.toggle('active'): It toggles the presence of the 'active' class on the navbarToggler element.


// =======================
// Search Toggle
// =======================

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener("click", function () {
        searchBox.classList.toggle("active");
        console.log("Search Toggler Works");
    })
}


// =======================
// Header
// =======================
// The purpose of this code is to add or remove the active class from the header element based on the user's scroll position. This can be useful for triggering different styles or behaviors on the header element when it becomes visible or reaches a certain position during scrolling.
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }
})


// =======================
// Back To Top
// =======================

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        backTopBtn.classList.add("active")
    } else {
        backTopBtn.classList.remove("active");
    }
})
