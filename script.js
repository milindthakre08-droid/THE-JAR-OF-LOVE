const music = document.getElementById("bgmusic");
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainSite = document.getElementById("main-site");

const revealBtn = document.getElementById("revealBtn");
const reasonText = document.getElementById("reasonText");
const jar = document.getElementById("jar");
const letter = document.getElementById("letter");
const overlay = document.getElementById("magicOverlay");

/* 🫙 MEMORY VAULT GLOW */
const vaultGlow = document.getElementById("vaultGlow");

/* 🧠 365 MEMORY INDEX (NEW SAFE UPGRADE) */
let jarIndex = localStorage.getItem("jarIndex");
jarIndex = jarIndex ? parseInt(jarIndex) : 0;

/* ENTER */
enterBtn.addEventListener("click", async () => {

    try {
        await music.play();
    } catch (e) {}

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {
        welcomeScreen.style.display = "none";
        mainSite.style.display = "block";
    }, 800);

});

/* MUSIC */
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

/* HEARTS */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💜";

    const rect = jar.getBoundingClientRect();

    heart.style.left = (rect.left + rect.width / 2) + "px";
    heart.style.top = rect.top + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
}

function burstHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 100);
    }
}

/* TYPEWRITER */
function typeWriter(text) {

    reasonText.innerHTML = "";

    let i = 0;

    const interval = setInterval(() => {

        if (i < text.length) {
            reasonText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }

    }, 25);
}

/* REVEAL (UPGRADED LOGIC — NO RANDOM NOW) */
revealBtn.addEventListener("click", () => {

    /* 🫙 SAFE 365 SEQUENTIAL REASON */
    const reasonTextValue = reasons[jarIndex];

    jarIndex++;

    if (jarIndex >= reasons.length) {
        jarIndex = 0;
    }

    localStorage.setItem("jarIndex", jarIndex);

    jar.classList.add("shake");
    jar.classList.add("jar-active");

    if (overlay) overlay.classList.add("show");

    /* 🫙 MEMORY VAULT EFFECT ON */
    if (vaultGlow) vaultGlow.classList.add("show");

    burstHearts();

    setTimeout(() => {

        jar.classList.remove("shake");

        letter.classList.add("show");

        typeWriter(
`Dear Lakku,

${reasonTextValue}

Love,
Milind 💜`
        );

    }, 700);

    setTimeout(() => {

        if (overlay) overlay.classList.remove("show");

        jar.classList.remove("jar-active");

        /* 🫙 MEMORY VAULT EFFECT OFF */
        if (vaultGlow) vaultGlow.classList.remove("show");

    }, 1800);

});
