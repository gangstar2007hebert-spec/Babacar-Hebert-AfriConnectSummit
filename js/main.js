console.log("main.js connecté");

// Date de l'événement
const eventDate = new Date("2026-12-12T09:00:00").getTime();

// Fonction countdown
function updateCountdown() {


const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
);

const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
);

if (document.getElementById("days")) {

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

}

// Exécuter immédiatement
updateCountdown();

// Mise à jour chaque seconde
setInterval(updateCountdown, 1000);


// =========================
// ANIMATION DES COMPTEURS
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {


const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.textContent;

    const increment = target / 100;

    if (current < target) {

        counter.textContent = Math.ceil(current + increment);

        setTimeout(updateCounter, 30);

    } else {

        counter.textContent = target;

    }

};

updateCounter();


});

// =========================
// INTERSECTION OBSERVER
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {


entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add("show");

    }

});


});

hiddenElements.forEach(el => observer.observe(el));
// =========================
// ANNÉE DYNAMIQUE
// =========================

document.getElementById("year").textContent =
new Date().getFullYear();

// =========================
// NAVBAR SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {


if (window.scrollY > 80) {

    navbar.style.background = "rgba(18,18,18,0.95)";

    navbar.style.boxShadow =
    "0 5px 15px rgba(0,0,0,0.2)";

} else {

    navbar.style.background =
    "rgba(255,255,255,0.9)";

    navbar.style.boxShadow = "none";
}


});

// =========================
// BOUTON RETOUR HAUT
// =========================

const scrollTopBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {


if (window.scrollY > 300) {

    scrollTopBtn.style.display = "block";

} else {

    scrollTopBtn.style.display = "none";

}


});

// Scroll smooth
scrollTopBtn.addEventListener("click", () => {


window.scrollTo({
    top: 0,
    behavior: "smooth"
});


});
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        tabContents.forEach(content =>
            content.classList.remove("active")
        );

        button.classList.add("active");

        document
            .getElementById(button.dataset.day)
            .classList.add("active");

    });

});