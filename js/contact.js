/* =========================================================
   ORBIT DIGITAL SPACE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


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
   CLOSE MENU AFTER CLICKING LINK
========================================================= */

const mobileLinks =
    document.querySelectorAll(".mobile-links a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

});



/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   PROJECT FORM
========================================================= */

const projectForm =
    document.getElementById("projectForm");


if (projectForm) {

    projectForm.addEventListener("submit", event => {

        event.preventDefault();


        const button =
            projectForm.querySelector(".submit-button span");


        if (button) {

            button.textContent =
                "MESSAGE READY ✓";

        }


        setTimeout(() => {

            button.textContent =
                "SEND PROJECT";

        }, 2500);


    });

}



/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
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