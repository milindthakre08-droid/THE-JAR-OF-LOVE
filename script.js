// ELEMENTS

const music = document.getElementById("bgmusic");

const enterBtn = document.getElementById("enterBtn");

const welcomeScreen = document.getElementById("welcome-screen");

const mainSite = document.getElementById("main-site");

const revealBtn = document.getElementById("revealBtn");

const card = document.getElementById("card");

const reasonText = document.getElementById("reasonText");

// ENTER WEBSITE

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

// MUSIC BUTTON

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

// REVEAL REASON

revealBtn.addEventListener("click", () => {

    const randomReason =
        reasons[Math.floor(Math.random() * reasons.length)];

    reasonText.innerText = randomReason;

    card.style.display = "block";

});
