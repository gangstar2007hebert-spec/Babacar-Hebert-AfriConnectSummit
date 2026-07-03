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

document.getElementById("days").textContent = days;

document.getElementById("hours").textContent = hours;

document.getElementById("minutes").textContent = minutes;

document.getElementById("seconds").textContent = seconds;


}

// Exécuter immédiatement
updateCountdown();

// Mise à jour chaque seconde
setInterval(updateCountdown, 1000);
