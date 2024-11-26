document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector("#main-content");
    const navLinks = document.querySelectorAll(".nav-link");
    const defaultPage = "home";

    // Function to dynamically load CSS
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

    // Function to dynamically load pages
    const loadPage = async (page) => {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (!response.ok) throw new Error("Failed to load the requested page!");

            const content = await response.text();
            mainContainer.innerHTML = content;

            loadCSS(`css/${page}.css`);
        } catch (error) {
            console.error("Error loading page:", error);
            mainContainer.innerHTML = `<p>Sorry, we couldn't load the requested page. Please try again later.</p>`;
        }
    };

    // Update active link styling
    const updateActiveLink = (activeLink) => {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
        activeLink.classList.add("active");
    };

    // Handle navigation clicks
    const handleNav = (event) => {
        event.preventDefault();
        const targetPage = event.target.getAttribute("href").replace("#", "");
        loadPage(targetPage);
        updateActiveLink(event.target);
    };

    // Attach event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNav);
    });

    // Load initial page based on URL hash or default page
    const initialPage = window.location.hash.replace("#", "") || defaultPage;
    loadPage(initialPage);

    // Update active link for the initial page
    const initialLink = Array.from(navLinks).find(
        (link) => link.getAttribute("href").replace("#", "") === initialPage
    );
    if (initialLink) updateActiveLink(initialLink);
});
