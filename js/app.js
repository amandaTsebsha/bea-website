document.addEventListener("DOMContentLoaded", () => {

    const mainContainer = document.querySelector("#main-content");

    const navLink = document.querySelectorAll(".nav-link");

    const defaultPage = "home";

    const loadPage = async (page) => {

        try{
            
            const response = await fetch('pages/${page}.html');
            if (!response.ok) throw new Error("BEA DIGI-DEMY did not understand your page request!");
            const content = await response.text();

            mainContainer.innerHTML = content;

            loadCSS('css/${page}.css');

        }catch (error) {
            console.error("Error loading page:", error); 

            mainContainer.innerHTML = "<p>Sorry, I couldn't load the requested page.</p>";
        }

        const loadCSS = (cssFile) => {

            const existingLink = document.querySelector("#dynamic-css");
            if (existingLink) existingLink.remove();

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.id = "dynamic-css";
            link.href = cssFile;

            document.head.appendChild(link);
        };


        const handleNav = (event) => {
            event.preventDefault();

            const targetPage = event.target.getAttribute("href").replace("#", "");

            loadPage(targetPage);

            updateActiveLink(event.target);

    };


    const updateActiveLink = (activeLink) => {
        navLink.forEach((link) => {
            link.classList.remove("active");
        });
        activeLink.classList.add("active");
    
    };

    navLink.forEach((link) => {
        link.addEventListener("click", handleNav);
    });


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
