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


        /* Close menu after clicking a link */

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

    if (cards.length > 0) {

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

    if (aboutElements.length > 0) {

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

    const slideshow =
        document.querySelector(".program-slideshow");

    if (slideshow) {

        const slides =
            slideshow.querySelectorAll(".program-slide");

        const previousButton =
            slideshow.parentElement.querySelector(".slide-prev");

        const nextButton =
            slideshow.parentElement.querySelector(".slide-next");

        let currentSlide = 0;


        /* Make sure the first slide is visible */

        if (slides.length > 0) {

            slides[0].classList.add("active-slide");

        }


        /* Show selected slide */

        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active-slide");

            });

            slides[index].classList.add("active-slide");

        }


        /* Next image */

        function nextSlide() {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }


        /* Previous image */

        function previousSlide() {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide = slides.length - 1;

            }

            showSlide(currentSlide);

        }


        /* Next button */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextSlide
            );

        }


        /* Previous button */

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousSlide
            );

        }


        /* Automatic slideshow */

        if (slides.length > 1) {

            setInterval(function () {

                nextSlide();

            }, 5000);

        }

    }
    

});