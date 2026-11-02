
/* SAVED DREAMS FOUNDATION - MOBILE NAVIGATION */

const menuButton = document.getElementById("menuBtn");
const navigationMenu = document.getElementById("navMenu");

if (menuButton && navigationMenu) {
    const setMenuOpen = (isOpen) => {
        navigationMenu.classList.toggle("open", isOpen);

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    };

    menuButton.addEventListener("click", () => {
        setMenuOpen(!navigationMenu.classList.contains("open"));
    });

    navigationMenu.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });
}


/*
   SAVED DREAMS FOUNDATION - INTERACTIVE LOCATION MAP
   Library: Leaflet
   Map tiles: OpenStreetMap
*/

document.addEventListener("DOMContentLoaded", function () {

    const mapElement = document.getElementById("foundation-map");

    // Run only on pages containing the interactive map.
    if (!mapElement || typeof L === "undefined") {
        return;
    }

    const locations = [
        {
            name: "Saved Dreams Foundation - Main Office",
            latitude: -32.720837,
            longitude: 25.590061,
            address: "Somerset East, Eastern Cape, 5850, South Africa",
            popupContent:
                "<strong>Saved Dreams Foundation</strong><br>" +
                "Main Office<br>" +
                "Somerset East, Eastern Cape, 5850"
        }
    ];

    const map = L.map("foundation-map").setView(
        [
            locations[0].latitude,
            locations[0].longitude
        ],
        15
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">' +
            'OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    locations.forEach(function (location) {

        L.marker([
            location.latitude,
            location.longitude
        ])
            .addTo(map)
            .bindPopup(location.popupContent);

    });

});


/* FAQ ACCORDION */

document.addEventListener("DOMContentLoaded", function () {

    const faqButtons = document.querySelectorAll(".faq-toggle");

    faqButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const answerId = button.getAttribute("aria-controls");
            const answer = document.getElementById(answerId);

            if (!answer) {
                return;
            }

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));
            answer.hidden = isExpanded;

            const icon = button.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = isExpanded ? "+" : "−";
            }

        });

    });

});


/* CONTACT PAGE HEADING ANIMATION */

document.addEventListener("DOMContentLoaded", () => {

    const contactHeading = document.querySelector(".contact-intro h1");

    if (contactHeading) {
        contactHeading.classList.add("show-heading");
    }

});



/* =========================================
   ABOUT AND PROGRAMS - FLOATING WORD BUBBLES
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Find both hero sections.
    const heroSections = document.querySelectorAll(
        ".about-hero, .program-hero"
    );

    // Words for the About page.
    const aboutWords = [
        "SAVED DREAMS",
        "HOPE",
        "EMPOWERMENT",
        "COMMUNITY",
        "A BRIGHTER FUTURE",
        "TOGETHER WE GROW",
        "INSPIRING CHANGE",
        "DREAM BIG",
        "BUILDING FUTURES",
        "MAKING A DIFFERENCE"
    ];

    // Words for the Programs page.
    const programWords = [
        "SAVED DREAMS",
        "YOUTH EMPOWERMENT",
        "EDUCATION",
        "COMMUNITY SUPPORT",
        "WOMEN EMPOWERMENT",
        "HEALTH AWARENESS",
        "BUILDING FUTURES",
        "CREATING OPPORTUNITIES",
        "INSPIRING CHANGE",
        "STRONGER COMMUNITIES"
    ];

    // Respect reduced-motion preferences.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    heroSections.forEach((hero) => {

        // Create the bubble container.
        const bubbleContainer = document.createElement("div");

        bubbleContainer.classList.add("word-bubbles");

        bubbleContainer.setAttribute("aria-hidden", "true");

        hero.prepend(bubbleContainer);

        // Select words according to the current page.
        const words = hero.classList.contains("about-hero")
            ? aboutWords
            : programWords;

        // Generate floating word bubbles.
        words.forEach((word) => {

            const bubble = document.createElement("span");

            bubble.classList.add("word-bubble");

            bubble.textContent = word;

            // Random horizontal position.
            bubble.style.setProperty(
                "--left",
                Math.random() * 85 + "%"
            );

            // Random animation speed.
            bubble.style.setProperty(
                "--duration",
                (10 + Math.random() * 8) + "s"
            );

            // Random starting delay.
            bubble.style.setProperty(
                "--delay",
                (Math.random() * 10) + "s"
            );

            // Random bubble font size.
            bubble.style.setProperty(
                "--font-size",
                (13 + Math.random() * 9) + "px"
            );

            bubbleContainer.appendChild(bubble);

        });

    });

});

/* [programme filtering-dynamic] */

document.addEventListener("DOMContentLoaded", () => {

    // Select filter controls and programme cards across the page.
    // The controls are intentionally outside .programs-section in the HTML.
    const filterButtons = document.querySelectorAll(".filter-btn");

    const programCards = document.querySelectorAll(".programs-section .program-card");

    // Results message.
    const resultsMessage = document.getElementById("filter-results");

    // Stop if the required elements are missing.
    if (!filterButtons.length || !programCards.length) {
        return;
    }

    // Function to filter programmes.
    function filterPrograms(selectedCategory) {

        let visibleCount = 0;

        programCards.forEach((card) => {

            // Read and normalise the categories assigned to each card.
            const categories = (card.dataset.category || "")
                .toLowerCase()
                .split(/\s+/)
                .filter(Boolean);

            // Check whether the programme matches.
            const shouldDisplay =
                selectedCategory === "all" ||
                categories.includes(selectedCategory.toLowerCase());

            // Show or hide the programme.
            card.hidden = !shouldDisplay;

            if (shouldDisplay) {
                visibleCount++;
            }

        });

        // Update the results message.
        if (resultsMessage) {

            if (selectedCategory === "all") {
                resultsMessage.textContent =
                    `Showing all ${visibleCount} programmes.`;
            } else {
                resultsMessage.textContent =
                    `Showing ${visibleCount} matching programme(s).`;
            }

        }

    }

    // Add click events to the filter buttons.
    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.filter;

            // Update the active button.
            filterButtons.forEach((filterButton) => {

                const isActive = filterButton === button;

                filterButton.classList.toggle("active", isActive);

                filterButton.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            });

            // Filter the programme cards.
            filterPrograms(selectedCategory);

        });

    });

    // Display all programmes when the page loads.
    filterPrograms("all");

});
