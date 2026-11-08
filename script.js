
const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");
const complimentPage = document.getElementById("complimentPage");

const hearts = document.getElementById("hearts");


// PAGE NAVIGATION

function showPage(pageToShow) {

    [welcome, surprise, complimentPage].forEach(page => {
        page.classList.add("hidden");
    });

    pageToShow.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// WELCOME TO LOVE LETTER

document.getElementById("openBtn").addEventListener("click", () => {

    showPage(surprise);

    createHearts(20);
});


// LOVE LETTER TO COMPLIMENT PAGE

document.getElementById("complimentBtn").addEventListener("click", () => {

    showPage(complimentPage);

    createHearts(30);
});


// COMPLIMENT PAGE TO LOVE LETTER

document.getElementById("backBtn").addEventListener("click", () => {

    showPage(surprise);
});


// HEART BUTTONS

document.getElementById("heartBtn").addEventListener("click", () => {

    createHearts(40);

});

document.getElementById("complimentHeartBtn").addEventListener("click", () => {

    createHearts(60);

});


// FLOATING HEARTS

function createHearts(count) {

    const heartTypes = ["❤️", "💖", "💕", "💗", "✨"];

    for (let i = 0; i < count; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            heartTypes[Math.floor(Math.random() * heartTypes.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6500);
    }
}


// GENERATE TWINKLING STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 70; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    stars.appendChild(star);
}


// FLOATING GOLDEN PARTICLES

const particles = document.getElementById("particles");

for (let i = 0; i < 20; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML = "✦";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.fontSize =
        (8 + Math.random() * 12) + "px";

    particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particles.appendChild(particle);
}
