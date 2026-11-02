
/* mobile nav*/

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


/*accordion faq */

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


/* contact page heading animation */

document.addEventListener("DOMContentLoaded", () => {

    const contactHeading = document.querySelector(".contact-intro h1");

    if (contactHeading) {
        contactHeading.classList.add("show-heading");
    }

});



/* floating word bubbles */

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

/* enquiry form validation and submission */

document.addEventListener("DOMContentLoaded", () => {

    const enquiryForm = document.getElementById("enquiryForm");

    // Run only on the enquiry page.
    if (!enquiryForm) return;

    // Form elements.
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const enquiryType = document.getElementById("type");
    const message = document.getElementById("message");

    // Conditional sections.
    const volunteerDetails =
        document.getElementById("volunteerDetails");

    const sponsorDetails =
        document.getElementById("sponsorDetails");

    const availability =
        document.getElementById("availability");

    const sponsorshipType =
        document.getElementById("sponsorshipType");

    const sponsorshipAmount =
        document.getElementById("sponsorshipAmount");

    const formMessage =
        document.getElementById("formMessage");


    /* relevant fields are shown or hidden based on the selected enquiry type */

    function updateEnquiryFields() {

        const selectedType = enquiryType.value;

        const isVolunteer = selectedType === "volunteer";
        const isSponsor = selectedType === "sponsor";

        // Show or hide volunteer information.
        volunteerDetails.hidden = !isVolunteer;

        // Show or hide sponsorship information.
        sponsorDetails.hidden = !isSponsor;

        // Make volunteer availability compulsory only
        // when volunteering is selected.
        availability.required = isVolunteer;

        // Make sponsorship type compulsory only
        // when sponsorship is selected.
        sponsorshipType.required = isSponsor;

        // Clear fields when their sections are hidden.
        if (!isVolunteer) {
            availability.value = "";
        }

        if (!isSponsor) {
            sponsorshipType.value = "";
            sponsorshipAmount.value = "";
            sponsorshipAmount.setCustomValidity("");
        }

        // Clear previous response.
        formMessage.textContent = "";
    }

    enquiryType.addEventListener("change", updateEnquiryFields);


    /* user input validation and form submission */

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent = "";

        // Remove extra spaces from text fields.
        const nameValue = fullName.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();

        // Name validation.
        fullName.setCustomValidity(
            nameValue.length < 2
                ? "Please enter your full name using at least 2 characters."
                : ""
        );

        // Email validation.
        email.setCustomValidity(
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
                ? "Please enter a valid email address."
                : ""
        );

        // Message validation.
        message.setCustomValidity(
            messageValue.length < 10
                ? "Please provide a message containing at least 10 characters."
                : ""
        );

        // Sponsorship amount validation.
        const amountValue = sponsorshipAmount.value.trim();

        sponsorshipAmount.setCustomValidity(
            amountValue !== "" &&
            (!Number.isFinite(Number(amountValue)) ||
             Number(amountValue) <= 0)
                ? "Please enter a valid sponsorship amount greater than zero."
                : ""
        );

        // Check all required fields and custom validation rules.
        if (!enquiryForm.checkValidity()) {

            enquiryForm.reportValidity();

            formMessage.textContent =
                "Please check your information and correct the highlighted fields.";

            return;
        }


        /* information is valid, process the enquiry */

        const selectedType = enquiryType.value;

        let response = "";

        const name = nameValue;

        // Process volunteer enquiry.
        if (selectedType === "volunteer") {

            const selectedAvailability = availability.value;

            response =
                `Thank you, ${name}! Your volunteer enquiry has been reviewed in this form preview.\n\n` +
                `Your stated availability: ${selectedAvailability}.\n\n` +
                "Volunteer opportunities depend on the Foundation's current programmes, " +
                "available opportunities and team confirmation. The Foundation will need " +
                "to confirm whether a suitable opportunity is available.";

        }

        // Process sponsorship enquiry.
        else if (selectedType === "sponsor") {

            const selectedSponsorship = sponsorshipType.value;

            const amount = amountValue
                ? new Intl.NumberFormat("en-ZA", {
                    style: "currency",
                    currency: "ZAR"
                }).format(Number(amountValue))
                : "Not specified";

            response =
                `Thank you, ${name}, for your interest in sponsoring Saved Dreams Foundation!\n\n` +
                `Sponsorship type: ${selectedSponsorship}.\n` +
                `Proposed contribution: ${amount}.\n\n` +
                "There is no confirmed sponsorship price or package displayed on this form. " +
                "The Foundation will need to discuss programme requirements, available " +
                "resources and the proposed contribution with you.";

        }

        // Process general enquiry.
        else if (selectedType === "general") {

            response =
                `Thank you, ${name}, for contacting Saved Dreams Foundation!\n\n` +
                "Your general enquiry details have been validated. " +
                "Your message concerns the Foundation's activities and community work. " +
                "Please contact the Foundation directly to arrange a response.";

        }


        /* response message for form submission status */

        formMessage.textContent =
            response +
            "\n\nIMPORTANT: This is a validation preview only. " +
            "Your enquiry has NOT been sent or saved. " +
            "A working email or backend service must be connected " +
            "before the Foundation can receive your information.";

        formMessage.classList.add("success-message");

    });

});

/* client-side form validation */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    // Run only when the contact form exists
    if (!contactForm) return;

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const typeInput = document.getElementById("message-type");
    const messageInput = document.getElementById("contact-msg");

    const responseMessage = document.getElementById("contactMessage");
    const submitButton = document.getElementById("contactSubmit");

    // Display messages to the visitor
    function showMessage(message, type) {
        responseMessage.textContent = message;
        responseMessage.className = `form-message ${type}`;
    }

    // Validate and submit the form
    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        // Clear previous feedback
        showMessage("", "");
        
        // Read and trim visitor input
        const fullName = nameInput.value.trim();
        const email = emailInput.value.trim();
        const messageType = typeInput.value;
        const fullMessage = messageInput.value.trim();

        // Reset custom validation
        nameInput.setCustomValidity("");
        emailInput.setCustomValidity("");
        typeInput.setCustomValidity("");
        messageInput.setCustomValidity("");

        // Validate name
        if (fullName.length < 2) {
            nameInput.setCustomValidity(
                "Please enter your full name using at least 2 characters."
            );
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailInput.setCustomValidity(
                "Please enter a valid email address."
            );
        }

        // Validate enquiry type
        if (!messageType) {
            typeInput.setCustomValidity(
                "Please select a type of enquiry."
            );
        }

        // Validate message
        if (fullMessage.length < 10) {
            messageInput.setCustomValidity(
                "Your message must contain at least 10 characters."
            );
        }

        if (fullMessage.length > 3000) {
            messageInput.setCustomValidity(
                "Your message cannot exceed 3000 characters."
            );
        }

        // Check all form fields
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();

            showMessage(
                "Please correct the highlighted fields before submitting.",
                "error-message"
            );

            return;
        }

        // Prevent duplicate submissions
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        showMessage(
            "Please wait while your enquiry is being submitted...",
            "loading-message"
        );

        try {

            // Confirm that the endpoint has been configured
            if (contactForm.action.includes("YOUR_FORM_ID")) {
                throw new Error(
                    "The form submission endpoint has not been configured."
                );
            }

            // Collect all form data
            const formData = new FormData(contactForm);

            // AJAX request using Fetch API
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            // Process the server response
            if (response.ok) {

                showMessage(
                    "Thank you! Your enquiry has been submitted successfully. Saved Dreams Foundation will get back to you.",
                    "success-message"
                );

                // Clear the form after successful submission
                contactForm.reset();

            } else {

                let errorDetails = "Please try again later.";

                try {
                    const result = await response.json();

                    if (result.errors && result.errors.length > 0) {
                        errorDetails = result.errors
                            .map(error => error.message)
                            .join(" ");
                    }
                } catch (error) {
                    // Use the default error message
                }

                throw new Error(errorDetails);
            }

        } catch (error) {

            console.error("Contact form error:", error);

            showMessage(
                "Sorry, your enquiry could not be submitted. " +
                error.message +
                " Please check your connection or email us at saveddreamsngo@gmail.com.",
                "error-message"
            );

        } finally {

            // Re-enable the button
            submitButton.disabled = false;
            submitButton.innerHTML =
                '<i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message';

        }

    });

});

