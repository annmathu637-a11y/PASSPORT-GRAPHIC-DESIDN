```javascript
// ==========================================
// PERSONAL SMALL BUSINESS PROFILE
// SCRIPT.JS
// ==========================================


// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CONTACT FORM
    // ==========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check that all fields are filled
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all the fields.");
                return;
            }

            // Simple email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success message
            alert(
                "Thank you, " + name +
                "! Your message has been received."
            );

            // Clear the form
            contactForm.reset();
        });
    }


    // ==========================================
    // SMOOTH NAVIGATION
    // ==========================================

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId.startsWith("#")) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // ==========================================
    // ACTIVE NAVIGATION LINK
    // ==========================================

    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navigationLinks.forEach(function (link) {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.style.color = "#f57c00";
            }
        });
    });


    // ==========================================
    // WELCOME MESSAGE
    // ==========================================

    console.log(
        "Welcome to our personal small business website!"
    );


    // ==========================================
    // DYNAMIC FOOTER YEAR
    // ==========================================

    const footer =
        document.querySelector("footer p");

    if (footer) {

        const currentYear =
            new Date().getFullYear();

        footer.innerHTML =
            "&copy; " +
            currentYear +
            " My Business. All Rights Reserved.";
    }


    // ==========================================
    // SERVICE CARD INTERACTION
    // ==========================================

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const serviceName =
                this.querySelector("h3").textContent;

            console.log(
                "Selected service: " + serviceName
            );
        });
    });


    // ==========================================
    // PORTFOLIO INTERACTION
    // ==========================================

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const projectName =
                this.querySelector("h3").textContent;

            alert(
                "You selected: " + projectName
            );
        });
    });

});
```
