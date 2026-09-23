
/* =========================================
   SAVED DREAMS FOUNDATION
   WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {

                menuBtn.innerHTML = "✕";

                menuBtn.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                menuBtn.innerHTML = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            }
        });


        /* Close menu after clicking a navigation link */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuBtn.innerHTML = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            });
        });
    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 30) {

                header.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.12)";

            } else {

                header.style.boxShadow =
                    "0 2px 10px rgba(0, 0, 0, 0.04)";
            }
        });
    }


    /* =========================================
       HOMEPAGE CARD ANIMATION
    ========================================= */

    const cards = document.querySelectorAll(".info-card");

    if (
        cards.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const cardObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        cardObserver.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(20px)";

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            cardObserver.observe(card);
        });
    }


    /* =========================================
       ABOUT PAGE ANIMATION
    ========================================= */

    const aboutElements = document.querySelectorAll(
        ".about-content, .mission-card, .team-section, .about-cta"
    );

    if (
        aboutElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const aboutObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        aboutObserver.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );


        aboutElements.forEach(function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(30px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            aboutObserver.observe(element);
        });
    }


    /* =========================================
       PROGRAM IMAGE SLIDESHOW
    ========================================= */

    const slideshows =
        document.querySelectorAll(".program-slideshow");


    slideshows.forEach(function (slideshow) {

        const slides =
            slideshow.querySelectorAll(".program-slide");

        const container =
            slideshow.parentElement;

        const previousButton =
            container.querySelector(".slide-prev");

        const nextButton =
            container.querySelector(".slide-next");

        let currentSlide = 0;


        /* Stop if there are no slides */

        if (slides.length === 0) {
            return;
        }


        /* Make sure the first slide is visible */

        slides[0].classList.add("active-slide");


        /* =========================================
           SHOW SELECTED SLIDE
        ========================================= */

        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active-slide");
            });

            slides[index].classList.add("active-slide");
        }


        /* =========================================
           NEXT SLIDE
        ========================================= */

        function nextSlide() {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;
            }

            showSlide(currentSlide);
        }


        /* =========================================
           PREVIOUS SLIDE
        ========================================= */

        function previousSlide() {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide =
                    slides.length - 1;
            }

            showSlide(currentSlide);
        }


        /* =========================================
           NEXT BUTTON
        ========================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextSlide
            );
        }


        /* =========================================
           PREVIOUS BUTTON
        ========================================= */

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousSlide
            );
        }


        /* =========================================
           AUTOMATIC SLIDESHOW
        ========================================= */

        if (slides.length > 1) {

            setInterval(function () {

                nextSlide();

            }, 5000);
        }
    });


    /* =========================================
       ENQUIRY FORM VALIDATION
    ========================================= */

    const enquiryForm =
        document.getElementById("enquiryForm");

    if (enquiryForm) {

        const formMessage =
            document.getElementById("formMessage");


        enquiryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Get form values */

                const fullname =
                    document.getElementById("fullname")
                        .value
                        .trim();

                const email =
                    document.getElementById("email")
                        .value
                        .trim();

                const type =
                    document.getElementById("type")
                        .value;

                const message =
                    document.getElementById("message")
                        .value
                        .trim();


                /* Reset message */

                if (formMessage) {

                    formMessage.className =
                        "form-message";

                    formMessage.textContent = "";
                }


                /* =========================================
                   FULL NAME VALIDATION
                ========================================= */

                if (fullname.length < 2) {

                    if (formMessage) {

                        formMessage.className =
                            "form-message error";

                        formMessage.textContent =
                            "Please enter your full name.";
                    }

                    return;
                }


                /* =========================================
                   EMAIL VALIDATION
                ========================================= */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    if (formMessage) {

                        formMessage.className =
                            "form-message error";

                        formMessage.textContent =
                            "Please enter a valid email address.";
                    }

                    return;
                }


                /* =========================================
                   ENQUIRY TYPE VALIDATION
                ========================================= */

                if (type === "") {

                    if (formMessage) {

                        formMessage.className =
                            "form-message error";

                        formMessage.textContent =
                            "Please select how you would like to get involved.";
                    }

                    return;
                }


                /* =========================================
                   MESSAGE VALIDATION
                ========================================= */

                if (message.length < 10) {

                    if (formMessage) {

                        formMessage.className =
                            "form-message error";

                        formMessage.textContent =
                            "Please enter a message of at least 10 characters.";
                    }

                    return;
                }


                /* =========================================
                   SUCCESS MESSAGE
                ========================================= */

                if (formMessage) {

                    formMessage.className =
                        "form-message success";

                    formMessage.textContent =
                        "Thank you for your enquiry! Your message has been captured successfully.";
                }


                /* Clear form */

                enquiryForm.reset();
            }
        );
    }
    /* ========================================= MOBILE NAVIGATION ========================================= */ 
    document.addEventListener("DOMContentLoaded", function () { const menuBtn = document.getElementById("menuBtn"); const navMenu = document.getElementById("navMenu"); if (menuBtn && navMenu) { menuBtn.addEventListener("click", function () { navMenu.classList.toggle("active"); if (navMenu.classList.contains("active")) { menuBtn.setAttribute("aria-label", "Close navigation"); menuBtn.innerHTML = "✕"; } else { menuBtn.setAttribute("aria-label", "Open navigation"); menuBtn.innerHTML = "☰"; } }); } });

});

