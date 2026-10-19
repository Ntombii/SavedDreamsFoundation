
/* SAVED DREAMS FOUNDATION - MOBILE NAVIGATION*/

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

    // Main office location from the supplied map screenshot.
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

    // Create the map centred on the main office.
    const map = L.map("foundation-map").setView(
        [
            locations[0].latitude,
            locations[0].longitude
        ],
        15
    );

    // Display the OpenStreetMap map tiles.
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">' +
            'OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Display a map marker for each configured location.
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

            // Open or close the selected answer.
            button.setAttribute("aria-expanded", String(!isExpanded));
            answer.hidden = isExpanded;

            // Update the plus/minus icon.
            const icon = button.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = isExpanded ? "+" : "−";
            }

        });

    });

});
