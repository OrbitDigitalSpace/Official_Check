/* =========================================================
   ORBIT DIGITAL SPACE
   MAIN.JS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const menuClose =
    document.getElementById("menuClose");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.add("open");

        document.body.style.overflow = "hidden";

    });

}


if (menuClose && mobileMenu) {

    menuClose.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

}



/* =========================================================
   MOBILE MENU LINKS
========================================================= */

const mobileLinks =
    document.querySelectorAll(".mobile-links a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.classList.remove("open");

        }

        document.body.style.overflow = "";

    });

});



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        mobileMenu &&
        mobileMenu.classList.contains("open")
    ) {

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    }

});



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.08
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   PROJECT FORM
========================================================= */

const projectForm =
    document.getElementById("projectForm");


if (projectForm) {

    projectForm.addEventListener("submit", event => {

        event.preventDefault();

        const buttonText =
            projectForm.querySelector(
                ".submit-button span"
            );


        if (buttonText) {

            buttonText.textContent =
                "MESSAGE READY ✓";


            setTimeout(() => {

                buttonText.textContent =
                    "SEND PROJECT";

            }, 2500);

        }

    });

}