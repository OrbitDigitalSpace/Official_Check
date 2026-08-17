/* =========================================================
   ORBIT DIGITAL SPACE
   PROCESS PAGE JAVASCRIPT
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


document
    .querySelectorAll(".menu-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


/* =========================================================
   SPACE CANVAS
========================================================= */

const canvas =
    document.getElementById("spaceCanvas");

const ctx =
    canvas
        ? canvas.getContext("2d")
        : null;


let width = 0;
let height = 0;

let stars = [];


function resizeCanvas() {

    if (!canvas || !ctx) return;


    width = window.innerWidth;

    height = window.innerHeight;


    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    canvas.width =
        width * dpr;

    canvas.height =
        height * dpr;


    canvas.style.width =
        width + "px";

    canvas.style.height =
        height + "px";


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );


    createStars();

}


function createStars() {

    stars = [];


    const amount =
        Math.min(
            450,
            Math.floor(
                width * height / 3500
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        stars.push({

            x:
                Math.random() * width,

            y:
                Math.random() * height,

            size:
                Math.random() * 1.4 + .2,

            speed:
                Math.random() * .25 + .03,

            opacity:
                Math.random() * .7 + .15,

            phase:
                Math.random() *
                Math.PI * 2

        });

    }

}


function drawStars() {

    if (!ctx) return;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    stars.forEach(star => {

        star.y -= star.speed;

        star.phase += .01;


        if (star.y < -5) {

            star.y =
                height + 5;

        }


        const opacity =
            star.opacity +
            Math.sin(star.phase) * .12;


        ctx.beginPath();


        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(
                255,
                150,
                90,
                ${Math.max(
                    .04,
                    opacity
                )}
            )`;


        ctx.fill();

    });


    requestAnimationFrame(
        drawStars
    );

}


resizeCanvas();

drawStars();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);


function animateGlow() {

    if (cursorGlow) {

        glowX +=
            (mouseX - glowX) * .08;

        glowY +=
            (mouseY - glowY) * .08;


        cursorGlow.style.left =
            glowX + "px";

        cursorGlow.style.top =
            glowY + "px";

    }


    requestAnimationFrame(
        animateGlow
    );

}


animateGlow();


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.style.padding =
                "17px 5vw";

            header.style.background =
                "rgba(5,5,5,.65)";

            header.style.backdropFilter =
                "blur(15px)";

        } else {

            header.style.padding =
                "28px 5vw";

            header.style.background =
                "";

            header.style.backdropFilter =
                "";

        }

    }
);


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".process-step, .service-card, .process-cta"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {
                    
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(45px)";


        element.style.transition =
            "opacity .9s ease, transform .9s cubic-bezier(.16,1,.3,1)";


        revealObserver.observe(
            element
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(".visible")
            .forEach(element => {

                element.style.opacity = "1";

                element.style.transform =
                    "translateY(0)";

            });

    }
);


/* =========================================================
   REDUCED MOTION
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";


    revealElements.forEach(
        element => {

            element.style.opacity = "1";

            element.style.transform =
                "none";

            element.style.transition =
                "none";

        }
    );

}