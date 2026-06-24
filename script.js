const music = document.getElementById("bgmusic");

const enterBtn = document.getElementById("enterBtn");

const welcomeScreen = document.getElementById("welcome-screen");

const mainSite = document.getElementById("main-site");

const revealBtn = document.getElementById("revealBtn");

const card = document.getElementById("card");

const reasonText = document.getElementById("reasonText");

/* ENTER WEBSITE */

enterBtn.addEventListener("click", () => {

    music.play();

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.display = "none";

        mainSite.style.display = "block";

    }, 1000);

});

/* MUSIC TOGGLE */

function toggleMusic(){

    if(music.paused){

        music.play();

    }else{

        music.pause();

    }

}

/* REASONS */

revealBtn.addEventListener("click", () => {

    const random =
        reasons[Math.floor(Math.random() * reasons.length)];

    reasonText.innerText = random;

    card.style.display = "block";

});
