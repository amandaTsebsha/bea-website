document.addEventListener("DOMContentLoaded", () => {

    const mainContainer = document.querySelector("#main-content");

    const navLink = document.querySelectorAll(".nav-link");

    const defaultPage = "home";
    

// const contentDiv = document.getElementById('content');

// // Function to load a page dynamically
// async function loadPage(page) {
//     const res = await fetch(`pages/${page}.html`);
//     const html = await res.text();
//     contentDiv.innerHTML = html;
// }

// // Handle navigation clicks
// document.querySelectorAll('[data-link]').forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const page = event.target.getAttribute('data-link');
//         history.pushState(null, null, `#${page}`);
//         loadPage(page);
//     });
// });

// // Load initial page on page load or refresh
// window.addEventListener('load', () => {
//     const page = location.hash.slice(1) || 'home';
//     loadPage(page);
// });

// // Handle browser navigation buttons
// window.addEventListener('popstate', () => {
//     const page = location.hash.slice(1) || 'home';
//     loadPage(page);
// });
