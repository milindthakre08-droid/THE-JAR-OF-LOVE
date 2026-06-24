// ELEMENTS

const music = document.getElementById("bgmusic");
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainSite = document.getElementById("main-site");

const revealBtn = document.getElementById("revealBtn");

const reasonText = document.getElementById("reasonText");
const jar = document.getElementById("jar");
const letter = document.getElementById("letter");

// ====================
// ENTER WEBSITE
// ====================

enterBtn.addEventListener("click", async () => {

    try {

        music.volume = 0.6;

        await music.play();

        console.log("Music started");

    } catch (err) {

        console.log("Music failed:", err);

    }

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.display = "none";

        mainSite.style.display = "block";

    }, 800);

});

// ====================
// MUSIC BUTTON
// ====================

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {
                console.log("Music resumed");
            })
            .catch(err => {
                console.log(err);
            });

    } else {

        music.pause();

    }

}

// ====================
// HEARTS
// ====================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💜";

    const rect = jar.getBoundingClientRect();

    heart.style.left =
        (rect.left + rect.width / 2) + "px";

    heart.style.top =
        (rect.top + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 2500);

}

function burstHearts() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}

// ====================
// TYPEWRITER EFFECT
// ====================

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

// ====================
// OPEN LETTER
// ====================

revealBtn.addEventListener("click", () => {

    const randomReason =
        reasons[Math.floor(Math.random() * reasons.length)];

    jar.classList.add("shake");

    burstHearts();

    setTimeout(() => {

        jar.classList.remove("shake");

        letter.classList.add("show");

        const message =
            "Dear Lakku,\n\n" +
            randomReason +
            "\n\nLove,\nMilind 💜";

        typeWriter(message);

    }, 700);

});
