/* =========================================================
   ORBIT DIGITAL SPACE
   PRICING JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.getElementById("menu");

const menuClose =
    document.getElementById("menuClose");


function openMenu() {

    if (!menu) return;

    menu.classList.add("open");

    document.body.style.overflow = "hidden";

}


function closeMenu() {

    if (!menu) return;

    menu.classList.remove("open");

    document.body.style.overflow = "";

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMenu
    );

}


if (menuClose) {

    menuClose.addEventListener(
        "click",
        closeMenu
    );

}


/* Close menu when a link is clicked */

document
    .querySelectorAll(".menu-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


/* Close with Escape */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);



/* =========================================================
   CARD REVEAL
========================================================= */

const cards =
    document.querySelectorAll(
        ".price-card, .build-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                (entry, index) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(35px)";

    card.style.transition =
        "opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1)";

    revealObserver.observe(card);

});


/* =========================================================
   REVEAL STYLE
========================================================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .price-card.visible,
    .build-item.visible {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;


document.head.appendChild(
    revealStyle
);



/* =========================================================
   BACKGROUND VIDEO FALLBACK
========================================================= */

const backgroundVideo =
    document.querySelector(
        ".space-background video"
    );


if (backgroundVideo) {

    backgroundVideo.addEventListener(
        "error",
        () => {

            backgroundVideo.style.display =
                "none";

        }
    );

}



/* =========================================================
   BUTTON MICRO INTERACTION
========================================================= */

document
    .querySelectorAll(
        ".card-button, .cta-button"
    )
    .forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateX(4px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });



/* =========================================================
   REDUCE MOTION
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducedMotion.matches) {

    document.documentElement.style
        .scrollBehavior = "auto";

}